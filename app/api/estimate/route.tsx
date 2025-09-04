import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with a check for API key
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey && resendApiKey !== 're_placeholder_key_for_build' 
  ? new Resend(resendApiKey) 
  : null

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const data = {
      name: formData.get("name") as string,
      mobile: formData.get("mobile") as string,
      email: formData.get("email") as string,
      vehicleMake: formData.get("vehicleMake") as string,
      vehicleModel: formData.get("vehicleModel") as string,
      vehicleYear: formData.get("vehicleYear") as string,
      registration: formData.get("registration") as string,
      insurer: formData.get("insurer") as string,
      claimNumber: formData.get("claimNumber") as string,
      damageDescription: formData.get("damageDescription") as string,
    }

    // Extract files
    const files: File[] = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("file_") && value instanceof File) {
        files.push(value)
      }
    }

    // Generate reference number
    const referenceNumber = `PPB-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`

    // Convert files to base64 for email attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        return {
          filename: file.name,
          content: buffer,
        }
      }),
    )

    // Email to business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1246FF; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Estimate Request</h1>
          <p style="margin: 5px 0 0 0;">Reference: ${referenceNumber}</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #0A0A0A; margin-top: 0;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Mobile:</td><td>${data.mobile}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
          </table>
          
          <h2 style="color: #0A0A0A;">Vehicle Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Vehicle:</td><td>${data.vehicleMake} ${data.vehicleModel} (${data.vehicleYear})</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Registration:</td><td>${data.registration}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Insurer:</td><td>${data.insurer}</td></tr>
            ${data.claimNumber ? `<tr><td style="padding: 8px 0; font-weight: bold;">Claim Number:</td><td>${data.claimNumber}</td></tr>` : ""}
          </table>
          
          <h2 style="color: #0A0A0A;">Damage Description</h2>
          <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #E10600;">
            ${data.damageDescription}
          </p>
          
          <p style="margin-top: 20px; font-size: 14px; color: #666;">
            ${files.length} photo(s) attached. Please review and respond within 60 minutes.
          </p>
        </div>
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1246FF; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Estimate Request Received</h1>
          <p style="margin: 5px 0 0 0;">Reference: ${referenceNumber}</p>
        </div>
        
        <div style="padding: 20px;">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for your estimate request for your ${data.vehicleMake} ${data.vehicleModel}. We have received your photos and vehicle information.</p>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1246FF;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Our team will review your photos and damage description</li>
              <li>You'll receive a detailed estimate within 60 minutes</li>
              <li>We'll contact your insurer (${data.insurer}) on your behalf</li>
              <li>We'll arrange collection and delivery of your vehicle</li>
            </ul>
          </div>
          
          <p><strong>Your Reference Number:</strong> ${referenceNumber}</p>
          <p><strong>Contact Us:</strong></p>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Phone: <a href="tel:0796908176" style="color: #1246FF;">079 690 8176</a></li>
            <li>WhatsApp: <a href="https://wa.me/27796908176" style="color: #1246FF;">079 690 8176</a></li>
            <li>Address: 850 North Coast Rd, Briardene, Durban, 4057</li>
          </ul>
          
          <p style="margin-top: 30px;">Best regards,<br>
          <strong>Prestige Panel Beaters Team</strong></p>
        </div>
      </div>
    `

    // Check if Resend is available
    if (!resend) {
      console.log("Resend API key not configured, skipping email sending")
      return NextResponse.json({
        success: true,
        referenceNumber,
        message: "Estimate request submitted successfully (email disabled)",
      })
    }

    // Send email to business
    await resend.emails.send({
      from: "estimates@prestigepanelbeaters.co.za",
      to: process.env.ESTIMATE_TO_EMAIL || "info@prestigepanelbeaters.co.za",
      subject: `New Estimate Request - ${data.vehicleMake} ${data.vehicleModel} (${referenceNumber})`,
      html: businessEmailHtml,
      attachments,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: "estimates@prestigepanelbeaters.co.za",
      to: data.email,
      subject: `Estimate Request Received - ${referenceNumber}`,
      html: customerEmailHtml,
    })

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "Estimate request submitted successfully",
    })
  } catch (error) {
    console.error("Estimate submission error:", error)
    return NextResponse.json({ error: "Failed to submit estimate request" }, { status: 500 })
  }
}
