import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 3; // Max requests
const WINDOW = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function POST(request: Request) {
    try {
        // Get IP address (basic method for Vercel/Next.js)
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        // Rate Limiting Logic
        const now = Date.now();
        const record = rateLimitMap.get(ip);

        if (record) {
            if (now - record.lastReset > WINDOW) {
                // Reset window if time passed
                rateLimitMap.set(ip, { count: 1, lastReset: now });
            } else if (record.count >= LIMIT) {
                // Limit exceeded
                return NextResponse.json(
                    { error: "Too many requests. Please try again after 5 minutes." },
                    { status: 429 }
                );
            } else {
                // Increment count
                record.count++;
            }
        } else {
            // New record
            rateLimitMap.set(ip, { count: 1, lastReset: now });
        }

        // Clean up old records periodically (optional optimization)
        if (rateLimitMap.size > 1000) {
            for (const [key, val] of rateLimitMap.entries()) {
                if (now - val.lastReset > WINDOW) {
                    rateLimitMap.delete(key);
                }
            }
        }

        const { name, email, organization, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // list of receivers
            subject: `Prime Digital Consulting Form Submission from ${name}`, // Subject line
            text: `
        Name: ${name}
        Email: ${email}
        Organization: ${organization || "N/A"}
        
        Message:
        ${message}
      `, // plain text body
            html: `
        <h3>Prime Digital Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <br/>
        <p><strong>Requirements / Needs</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `, // html body
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
