import Link from "next/link";
import ClientSideButtons from "@/components/client-side-buttons";
import { redirect } from "next/navigation";

const buttonStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-left w-full";
const inlineCodeStyles = "before:content-['`'] after:content-['`']";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold">Next.js App Router Redirects</h1>
      <Link className={buttonStyles} href="/middleware-redirect">
        Middleware Redirect
      </Link>
      <Link className={buttonStyles} href="/api/redirect">
        Route Handler Redirect
      </Link>
      <Link className={buttonStyles} href="/next-config-redirect">
        <code className={inlineCodeStyles}>next.config.js</code> Redirect
      </Link>
      <form
        action={async () => {
          "use server";
          redirect("https://nextjs.org");
        }}
      >
        <button className={buttonStyles} type="submit">
          <code className={inlineCodeStyles}>redirect</code> Redirect
        </button>
      </form>
      <ClientSideButtons />
    </div>
  );
}
