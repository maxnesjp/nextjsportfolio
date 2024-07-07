"use server";
import { getErrorMessage, validateEmailFormat, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ReactEmail from "../email/reactEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server.");
    const sender = formData.get("sender") as string | undefined;
    const message = formData.get("message") as string | undefined;

    if (!validateString(sender, 30) || !validateEmailFormat(sender)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 500)) {
        return {
          error: "Invalid message",
        };
      }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: "nesmax.jp01@gmail.com",
            subject: "New message from Portfolio App",
            react: React.createElement(ReactEmail, {
                message: message,
                sender: sender,
              }),
            reply_to: sender
        });
       
    } catch (error: unknown) {
        console.log("Error:", error);
        return{
            error: getErrorMessage(error)
        };
    }
    return {
        data
    }
};
