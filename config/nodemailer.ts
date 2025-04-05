import nodemailer from "nodemailer"

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// if no variable in the env
if (!email || !pass) {
    throw new Error("EMAIL or EMAIL_PASS environment variables are not configured");
}

export const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    }
})

export const mailOption = {
    from: email,
    to: email,
}