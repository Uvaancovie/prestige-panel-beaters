import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with a check for API key
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey && resendApiKey !== 're_placeholder_key_for_build' 
  ? new Resend(resendApiKey) 
  : null

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Generate reference number
    const referenceNumber = `CONTACT-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`

    // Email to business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1246FF; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0;">Reference: ${referenceNumber}</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #0A0A0A; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
          </table>
          
          <h2 style="color: #0A0A0A;">Message</h2>
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #E10600;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <p style="margin-top: 20px; font-size: 14px; color: #666;">
            Please respond to this enquiry within 24 hours.
          </p>
        </div>
      </div>
    `

    // Check if Resend is available
    if (!resend) {
      console.log("Resend API key not configured, skipping email sending")
      return NextResponse.json({
        success: true,
        referenceNumber,
        message: "Message received successfully (email disabled)",
      })
    }

    // Send email to business
    await resend.emails.send({
      from: "contact@prestigepanelbeaters.co.za",
      to: process.env.ESTIMATE_TO_EMAIL || "info@prestigepanelbeaters.co.za",
      subject: `New Contact Form Submission - ${name} (${referenceNumber})`,
      html: businessEmailHtml,
    })

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
