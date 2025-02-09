import nodemailer from "nodemailer";
import config from "../config/config";
// const mailgun = require('mailgun-js');

console.log(
  "this are the details ",
  config.password,
  config.email,
  config.username
);
let transporter = nodemailer.createTransport({
  host: config.mailServer, //replace with your email provider
  port: Number(config.smtpPort),
  tls: true,
  auth: {
    user: config.username,
    pass: config.password,
  },
});

// const sparkPostTransport = require("nodemailer-sparkpost-transport"),
//   transporter = nodemailer.createTransport(
//     sparkPostTransport({
//       sparkPostApiKey: "933afab3231d67f6e8dbf7721fd656551d707ab7",
//       options: {
//         open_tracking: true,
//         click_tracking: true,
//         transactional: true,
//       },
//     })
//   );

// verify connection configuration
transporter.verify(function (error, success) {
  console.log("transporter initiated");
  if (error) {
    console.log({ error });
    console.log(error.message, "verification error");
  } else {
    console.log("Server is ready to take our messages", success);
  }
});

const sendMail = async (msg, subject, reciever) => {
  //2. You can configure the object however you want
  try {
    let mail = {
      from: `"Elizabeth Ross" <${config.email}>`,
      to: reciever,
      subject: subject,
      html: msg,
    };
    //3.
    let info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (err) {
    console.log(`error sending mail to user ${reciever}`);
    console.log(err);
    return false;
  }
};

// const sendMail = async (msg, subject, reciever) => {
//   const { apiKey, domain } = config;
//   const mg = mailgun({ apiKey, domain });
//   const data = {
//     from: config.email,
//     to: reciever,
//     subject: subject,
//     html: msg,
//   };
//   return await mg.messages().send(data);
// };

export default sendMail;
