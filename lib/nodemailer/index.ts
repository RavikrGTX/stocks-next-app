import nodemailer from 'nodemailer'
import { WELCOME_EMAIL_TEMPLATE,NEWS_SUMMARY_EMAIL_TEMPLATE } from './templates';


export const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }

})

export const sendWelcomeEmail=async({email, name, intro}:WelcomeEmailData)=>{

    const htmlTemplate=WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}',name)
    .replace('{{intro}}', intro);

    const mailOptions={
        from:`"Stocks Gravity"<rkstoic@gmail.com>`,
        to:email,
        subject:`Welcome to Stocks Gravity -your are all set for using Stocks Gravity!`,

        text: 'Thanks for using Stocks Gravity.Play long-term games with long-term thinking',
        html:htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}

export const sendNewsSummaryEmail = async (
    { email, date, newsContent }: { email: string; date: string; newsContent: string }
): Promise<void> => {
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
        .replace('{{date}}', date)
        .replace('{{newsContent}}', newsContent);

    const mailOptions = {
        from: `"Stocks Gravity" <rkstoicyt@gmail.com>`,
        to: email,
        subject: `Market Signals for today - ${date}`,
        text: `Stocks Gravity  market signals`,
        html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
};