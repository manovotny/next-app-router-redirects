"use client";

import { useRouter } from "next/navigation";

const buttonStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-left w-full";
const inlineCodeStyles = "before:content-['`'] after:content-['`']";

export default function ClientSideButtons() {
  const router = useRouter();

  return (
    <>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => {
          router.push("https://nextjs.org");
        }}
      >
        <code className={inlineCodeStyles}>router.push</code> Redirect
      </button>
      <button
        className={buttonStyles}
        type="button"
        onClick={() => {
          window.location.assign("https://nextjs.org");
        }}
      >
        <code className={inlineCodeStyles}>window.location.assign</code>{" "}
        Redirect
      </button>
    </>
  );
}
