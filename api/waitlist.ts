import nodemailer from 'nodemailer'

import type {
  VercelRequest,
  VercelResponse
} from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  const {
    name,
    email,
  } = req.body

  const transporter =
    nodemailer.createTransport({

      host:
        'smtp.zoho.in',

      port: 465,

      secure: true,

      auth: {

        user:
          'tomo@tomodeskapp.com',

        pass:
          process.env.EMAIL_PASS,
      },
    })

  await transporter.sendMail({

    from:
      'TOMODesk <tomo@tomodeskapp.com>',

    to:
      'tomo@tomodeskapp.com',

    subject:
      'New Waitlist Signup',

    html: `
        <h2>
          New Waitlist Signup
        </h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>
      `,
  })

  res.status(200).json({
    success: true
  })
}