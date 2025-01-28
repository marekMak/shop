"use client";
type Product = {
  id: number;
  product_name: string;
  product_subtitle: string;
  product_price: number;
  product_old_price: number;
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
    <div>
      {products.map((product) => (
        <ShopCard
          key={product.id}
          id={product.id}
          title={product.product_name}
          subtitle={product.product_subtitle}
          price={product.product_price}
          oldPrice={product.product_old_price}
        />
      ))}
    </div>
  );
};

export default Products;
