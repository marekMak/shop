import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Logo from "../logo/Logo";
import Logout from "./Logout";

import useCartStore from "@/store/cartStore";

import { RxCaretDown } from "react-icons/rx";
import Cart from "../cart/Cart";
import Subheader from "./Subheader";
import ShowItems from "../cart/ShowItems";
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
          <div className="dropdown relative">
            <Link
              href="/shop"
              className="delay-150 transition-colors hover:text-grey cursor-pointer flex items-center"
            >
              Shop <RxCaretDown />
            </Link>
            <Subheader />
          </div>
          <Link
            href="/our-story"
            className="delay-150 transition-colors hover:text-grey cursor-pointer"
          >
            Our Story
          </Link>
          <Link
            href="/blog"
            className="delay-150 transition-colors hover:text-grey cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="delay-150 transition-colors hover:text-grey cursor-pointer"
          >
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="text-baseBlack flex gap-4 items-center text-2xl font-bold ">
        <div className="relative dropdown-cart py-1">
          <Cart />
          <ul className="flex">
            <li className="cursor-pointer">
              <ShowItems />
            </li>
          </ul>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <Link href="/profile">
              <span className="text-sm text-grey">
                Hello, {user.user_metadata.firstname}{" "}
                {user.user_metadata.lastname}
              </span>
            </Link>

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
