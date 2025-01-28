// ShopCard.tsx
import useCartStore from "@/store/cartStore";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  quantity: number;
}

const ShopCard = ({ id, title, subtitle, price, oldPrice }: Product) => {
  const { addToCart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    const product: Product = {
      id,
      title,
      subtitle,
      price,
      oldPrice,
      quantity: 1, // Predpokladáme, že na začiatku je množstvo 1
    };
    addToCart(product);
    console.log("Product added to cart");
  };

  return (
    <div className="card bg-base-100 rounded-none group relative overflow-hidden">
      <div className="relative h-72">
        <figure className="h-72 bg-grey-light"></figure>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow w-[90%] text-black text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to Cart
        </button>
        <div className="absolute top-5 right-3 bg-grey-light opacity-0 group-hover:opacity-100 transition-opacity">
          <ul className="flex flex-col">
            <li className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center cursor-pointer">
              <Link href={`/product/${id}`}>
                <IoEyeOutline />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body px-0 py-2">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm capitalize">{subtitle}</p>
        <div className="flex items-center gap-2">
          <span>${price}</span>
          <span className="text-grey text-sm line-through">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
