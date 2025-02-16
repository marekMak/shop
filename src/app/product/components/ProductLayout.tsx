"use client";

interface ProductId {
  id: number;
}

type Product = {
  id: number;
  product_name: string;
  product_subtitle: string;
  product_description: string;
  product_price: number;
  product_old_price: number;
  product_image_url: string;
  product_in_stock: boolean;
  product_additional_information: string;
};
import { useEffect, useState } from "react";
import { fetchProduct } from "@/utils/supabase/actions";
import { formatPrice } from "@/utils/utils";
import useCartStore from "@/store/cartStore";

import ColorCard from "../components/ColorCard";
import SizeCard from "../components/SizeCard";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import PictureCard from "../components/PictureCard";
import Tab from "../components/Tab";
import ProductHeader from "./ProductHeader";

const ProductLayout = ({ id }: ProductId) => {
  const [product, setProduct] = useState<Product[]>([]);
  const { addToCart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    if (!product) return; // Ak nie je produkt, nič nepridáme do košíka
    const productToAdd: Product = {
      id: product.id,
      product_name: product.product_name,
      product_subtitle: product.product_subtitle,
      product_price: product.product_price,
      product_old_price: product.product_old_price,
      product_image_url: product.product_image_url,
      product_in_stock: product.product_in_stock,
      product_additional_information: product.product_additional_information,
      quantity: 1, // Predpokladám, že chceš predvolenú hodnotu
    };
    addToCart(productToAdd);
    console.log("Product added to cart");
  };

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProduct(id);
      if (response.success) {
        setProduct(response.data); // Očakávame len jeden produkt
      } else {
        console.error(response.message);
      }
    };

    loadProduct();
  }, [id]);
  return (
    <div className="w-full">
      <div className="flex flex-col h-full w-full  text-justify  py-10 gap-8">
        <ProductHeader title={product.product_subtitle} />

        <div className="w-full h-fit  grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-grey-light p-2 flex flex-col justify-center items-center">
            <div className="w-80 h-80 flex  relative">
              <Image
                src={product.product_image_url}
                alt={product.product_name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{product.product_name}</h1>
                {product.product_in_stock ? (
                  <span className="text-sm bg-green-100 text-green-400 px-2 py-1 rounded-sm text-center">
                    in stock
                  </span>
                ) : (
                  <span className="text-sm bg-red-100 text-red-400 px-2 py-1 rounded-sm text-center">
                    out of stock
                  </span>
                )}
              </div>
              <p className="capitalize">{product.product_subtitle}</p>
              <div className="flex items-center gap-2">
                <span>{formatPrice(product.product_price)}</span>
                <span className="text-grey line-through">
                  {formatPrice(product.product_old_price)}
                </span>
              </div>
            </div>
            <p className="py-4 text-sm">{product.product_description}</p>
            <div className="flex flex-col">
              <h1 className="text font-bold">Color</h1>
              <div className="flex items-center gap-2 py-2">
                <ColorCard />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text font-bold">Size</h1>
              <div className="flex items-center gap-2 py-2">
                <SizeCard size="S" />
                <SizeCard size="M" />
                <SizeCard size="X" />
                <SizeCard size="XL" />
              </div>
            </div>
            {product.product_in_stock ? (
              <div className="py-8 flex gap-4">
                <div className="border-black border-2 rounded-lg flex justify-center items-center px-2 py-2 text-xl gap-4">
                  <button className="px-2 text-sm hover:bg-grey">
                    <FaPlus />
                  </button>
                  <span>1</span>
                  <button className="px-2 text-sm">
                    <FaMinus />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="py-2 px-4 bg-black text-white rounded-md w-full"
                >
                  Add to Cart
                </button>
                <div className="border-black border-2 rounded-lg flex justify-center items-center px-2 py-2 text-3xl">
                  <IoMdHeartEmpty />
                </div>
              </div>
            ) : (
              <div className="py-8 flex gap-4">
                <button
                  disabled
                  className="py-2 px-4 bg-red-100 text-red-400 rounded-md w-full"
                >
                  Out of stock
                </button>
                <div className="border-black border-2 rounded-lg flex justify-center items-center px-2 py-2 text-3xl">
                  <IoMdHeartEmpty />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 pr-2 h-fit py-2 flex justify-between">
          <PictureCard imageUrl={product.product_image_url} />
          <PictureCard imageUrl={product.product_image_url} />
          <PictureCard imageUrl={product.product_image_url} />
          <PictureCard imageUrl={product.product_image_url} />
        </div>

        <div className="w-full min-h-5">
          <Tab
            description={product.product_description}
            additionalInformation={product.product_additional_information}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
