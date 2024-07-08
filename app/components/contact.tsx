"use client";
import React from "react";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmail";
import ContactButton from "./contactFormButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem) text-center"
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <Heading title="Contact" />
      <p className="text-gray-950 -mt-5">
        Contact me directly at{" "}
        <a className="underline" href="mailto:nesmax.jp01@gmail.com"></a>
        nesmax.jp01@gmail.com or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="sender"
          className="h-14 px-4 rounded-lg borderBlack"
          required
          maxLength={30}
          placeholder="Your email"
        />
        <textarea
          name="message"
          className="h-52 my-3 p-4 rounded-lg borderBlack"
          required
          maxLength={300}
          placeholder="Your message"
        />
        <div className="flex justify-center sm:justify-start items-center">
          <ContactButton />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
