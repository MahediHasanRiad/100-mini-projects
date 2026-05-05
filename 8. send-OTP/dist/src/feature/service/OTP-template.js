export const getOTPTemplate = (otp) => {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Verify Your Account</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
      <tr>
        <td align="center">
          
          <!-- Card -->
          <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h2 style="margin:0; color:#333;">Verify Your Account</h2>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="color:#555; font-size:14px; text-align:center; padding-bottom:20px;">
                Use the following One-Time Password (OTP) to complete your verification.
              </td>
            </tr>

            <!-- OTP Box -->
            <tr>
              <td align="center" style="padding:20px 0;">
                <div style="
                  display:inline-block;
                  background:#f1f3f5;
                  padding:15px 25px;
                  border-radius:8px;
                  font-size:28px;
                  font-weight:bold;
                  letter-spacing:5px;
                  color:#222;
                ">
                  ${otp}
                </div>
              </td>
            </tr>

            <!-- Expiry -->
            <tr>
              <td style="color:#888; font-size:12px; text-align:center; padding-top:10px;">
                This OTP is valid for 5 minutes.
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:20px 0;">
                <hr style="border:none; border-top:1px solid #eee;" />
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="color:#999; font-size:12px; text-align:center;">
                If you didn’t request this, you can safely ignore this email.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
//# sourceMappingURL=OTP-template.js.map