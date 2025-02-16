"use client";
type Product = {
  id: number;
  product_name: string;
  product_subtitle: string;
  product_price: number;
  product_old_price: number;
  product_image_url: string;
  product_in_stock: boolean;
};
import { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/supabase/actions";
import ShopCard from "./ShopCard";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts();
      if (response.success) {
        setProducts(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ShopCard
          key={product.id}
          id={product.id}
          title={product.product_name}
          subtitle={product.product_subtitle}
          price={product.product_price}
          oldPrice={product.product_old_price}
          imageUrl={product.product_image_url}
          in_stock={product.product_in_stock}
        />
      ))}
    </>
  );
};

export default Products;
