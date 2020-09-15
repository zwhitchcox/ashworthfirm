const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "zwhitchcox@gmail.com",
    pass: "zvlmshhgznmqwdok",
  }
})

module.exports.send = (mailOptions) => {
  // const mailOptions = {
  //   from: 'ben@gmail.com',
  //   to: 'zanehitchcox@gmail.com',
  //   subject: 'test email',
  //   text: 'Dude, we really need your money',
  // }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(error)
    } else {
      console.log("email sent: " + info.response)
    }
  })

}