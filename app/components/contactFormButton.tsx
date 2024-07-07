import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const ContactButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-50"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
        </>
      )}
    </button>
  );
};

export default ContactButton;
