"use client";
type Size = {
  id: number;
  size_name: string;
};

import { useEffect, useState } from "react";
import { fetchSizes } from "@/utils/supabase/actions";

const Sizes = () => {
  const [sizes, setSizes] = useState<Size[]>([]);

  useEffect(() => {
    const loadSizes = async () => {
      const response = await fetchSizes();
      if (response.success) {
        setSizes(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadSizes();
  }, []);
  return (
    <div className="space-y-2">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center justify-between gap-4 p-2"
        >
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="text-sm font-medium">{size.size_name}</span>
          </div>
          <p className="text-gray-500 hover:text-gray-800">(25)</p>
        </div>
      ))}
    </div>
  );
};

export default Sizes;
