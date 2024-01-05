import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { services, text, fullName, email } = await request.json();

        if (!fullName || !email || !services || !text){
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            }
        })

        const mailOption = {
            from: 'dominik.jojczyk@gmail.com',
            to: 'dominik.jojczyk@gmail.com',
            subject: "Email ze strony DJJ Software od klienta",
            html: `
        <h2>Wiadomosc od klienta ze strony DJJ Software</h2>
        <li> title: ${services}</li>
        <li> message: ${text}</li>
        <li> email: ${email}</li>
        <li> by: ${fullName}</li>   
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}