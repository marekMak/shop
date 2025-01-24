import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Logo from "./Logo";
import Logout from "./Logout";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="flex px-10 md:px-20 py-4 justify-between items-center">
      <Logo />
      <div>
        <ul className="flex gap-6">
          <Link
            href="/"
            className="delay-150 transition-colors hover:text-grey cursor-pointer"
          >
            Home
          </Link>
          <li className="delay-150 transition-colors hover:text-grey cursor-pointer">
            Shop
          </li>
          <li className="delay-150 transition-colors hover:text-grey cursor-pointer">
            Our Story
          </li>
          <Link
            href="/blog"
            className="delay-150 transition-colors hover:text-grey cursor-pointer"
          >
            Blog
          </Link>
          <li className="delay-150 transition-colors hover:text-grey cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="text-baseBlack flex gap-4 items-center text-2xl font-bold">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-grey">
              Hello, {user.user_metadata.firstname}{" "}
              {user.user_metadata.lastname}
            </span>

            <Logout />
          </div>
        ) : (
          <a
            className="bg-baseBlack rounded-md py-2 px-4 text-white text-sm"
            href="/login"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}
