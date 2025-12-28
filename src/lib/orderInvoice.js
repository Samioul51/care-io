export const orderInvoiceTemplate = ({ order }) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
          
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <img src="https://i.ibb.co.com/pjjPrX35/logo.png" width="120" />
              <h2 style="margin:10px 0;">🧾 Order Invoice</h2>
              <p style="color:#555;">Order ID: <strong>${order._id}</strong></p>
            </td>
          </tr>

          <tr>
            <td>
              <table width="100%" border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
                <thead>
                  <tr style="background:#f0f0f0;">
                    <th align="left">Service</th>
                    <th align="center">Duration (hours)</th>
                    <th align="right">Price</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>${order.service_name}</td>
                      <td align="center">${order.duration}</td>
                      <td align="right">৳${order.price}</td>
                    </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-top:20px; color:#777;">
              <p>Thank you for choosing <strong>Care IO</strong></p>
              <p style="font-size:12px;">This is an automated email. Please do not reply.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
`;
};