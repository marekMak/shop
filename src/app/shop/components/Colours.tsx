"use client";
type Colour = {
  id: number;
  colour_name: string;
};

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { fetchColours } from "@/utils/supabase/actions";

const Colours = () => {
  const [colours, setColours] = useState<Colour[]>([]);

  useEffect(() => {
    const loadColours = async () => {
      const response = await fetchColours();
      if (response.success) {
        setColours(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadColours();
  }, []);

  return (
    <div className="space-y-2">
      {colours.map((colour) => (
        <div
          key={colour.id}
          className="flex items-center justify-between gap-4 p-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className={twMerge(`checkbox bg-${colour.colour_name}-400`)}
            />
            <span className="text-sm font-medium">{colour.colour_name}</span>
          </div>
          <p className="text-gray-500 hover:text-gray-800">(25)</p>
        </div>
      ))}
    </div>
  );
};

export default Colours;
