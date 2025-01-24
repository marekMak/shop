import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative w-36 h-16">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" fill quality={100} />
      </Link>
    </div>
  );
}
