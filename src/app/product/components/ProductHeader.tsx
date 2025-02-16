interface ProductHeaderTitle {
  title: string;
}

import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const ProductHeader = ({ title }: ProductHeaderTitle) => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">Home</Link>
      <MdArrowForwardIos />
      <Link href="/shop">Shop</Link>
      <MdArrowForwardIos />
      <p>{title}</p>
    </div>
  );
};

export default ProductHeader;
