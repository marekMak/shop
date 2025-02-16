// ShopCard.tsx
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  quantity: number;
  imageUrl: string;
  in_stock: boolean;
}

const ShopCard = ({
  id,
  title,
  subtitle,
  price,
  oldPrice,
  imageUrl,
  in_stock,
}: Product) => {
  const { addToCart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    const product: Product = {
      id,
      title,
      subtitle,
      price,
      oldPrice,
      quantity: 1,
      imageUrl,
      in_stock,
    };
    addToCart(product);
    console.log("Product added to cart");
  };

  return (
    <div className="card bg-base-100 rounded-none group relative overflow-hidden">
      <div className="relative h-72">
        <figure className="h-72 bg-grey-light">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="p-6"
          />
        </figure>
        {in_stock ? (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow w-[90%] text-black text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 shadow w-[90%] text-red-400 text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Out of Stock
          </button>
        )}
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
