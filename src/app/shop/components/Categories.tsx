"use client";
type Category = {
  id: number;
  category_name: string;
};

import { useEffect, useState } from "react";
import { fetchCategories } from "@/utils/supabase/actions";
import { FaPlus } from "react-icons/fa";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchCategories();
      if (response.success) {
        setCategories(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadCategories();
  }, []);
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between gap-4 p-2"
        >
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="text-sm font-medium">
              {category.category_name}
            </span>
          </div>
          <button className="text-gray-500 hover:text-gray-800">
            <FaPlus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
