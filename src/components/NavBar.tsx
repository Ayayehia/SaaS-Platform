import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
// import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all  ">
      <MaxWidthWrapper>
        <section className="flex justify-between items-center mt-4">
          <section>
            <Link href="/" className="text-black font-semibold">
              Doc Query Chat
            </Link>
          </section>
          <section>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pricing
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get started
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </RegisterLink>
          </section>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
