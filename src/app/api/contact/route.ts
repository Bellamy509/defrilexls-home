import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  topic: 'sales' | 'support' | 'other';
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message || !body.topic) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Rate limiting check (basic implementation)
    // In production, use a proper rate limiting solution like Upstash Redis
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // TODO: Implement hCaptcha verification
    // const captchaToken = request.headers.get('x-captcha-token');
    // if (!captchaToken) {
    //   return NextResponse.json(
    //     { message: 'Captcha verification required' },
    //     { status: 400 }
    //   );
    // }
    
    // TODO: Verify hCaptcha token with hCaptcha API
    // const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `response=${captchaToken}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    // });
    // const captchaData = await captchaResponse.json();
    // if (!captchaData.success) {
    //   return NextResponse.json(
    //     { message: 'Captcha verification failed' },
    //     { status: 400 }
    //   );
    // }

    // TODO: Send email notification
    // In production, integrate with email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company,
      topic: body.topic,
      message: body.message,
      ip,
      timestamp: new Date().toISOString(),
    });

    // TODO: Store in database for tracking
    // Example: await db.insert(contactSubmissions).values({...body, ip, createdAt: new Date()});

    // Route to appropriate team based on topic
    const recipients = {
      sales: 'sales@defrilex.com',
      support: 'support@defrilex.com',
      other: 'info@defrilex.com',
    };

    const recipient = recipients[body.topic];

    // TODO: Send email using your email service
    // Example with SendGrid:
    // await sendEmail({
    //   to: recipient,
    //   from: 'noreply@defrilex.com',
    //   replyTo: body.email,
    //   subject: `New ${body.topic} inquiry from ${body.name}`,
    //   text: `
    //     Name: ${body.name}
    //     Email: ${body.email}
    //     Company: ${body.company || 'N/A'}
    //     Topic: ${body.topic}
    //     
    //     Message:
    //     ${body.message}
    //   `,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
    //     <p><strong>Topic:</strong> ${body.topic}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
