"use client";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
type Address = {
  id: number;
  address_name: string;
  address_mobile_number: string;
  address_house_number: string;
  address_street: string;
  address_city: string;
  address_zip_code: string;
  address_state: string;
};
import { fetchAddresses, deleteAddress } from "@/utils/supabase/actions";
import { useState, useEffect } from "react";
const SelectAddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const loadAddresses = async () => {
    const response = await fetchAddresses();
    if (response.success) {
      setAddresses(response.data);
    } else {
      console.error(response.message);
    }
  };

  const handleDeleteAddress = async (id: number) => {
    const confirmation = confirm(
      "Are you sure you want to delete this address?"
    );
    if (confirmation) {
      const response = await deleteAddress(id);
      if (response.success) {
        setAddresses(addresses.filter((address) => address.id !== id));
      } else {
        console.error(response.message);
      }
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);
  return (
    <div className="flex gap-4">
      {addresses.map((address) => (
        <div
          key={address.id}
          className="bg-grey-light rounded-md px-2 py-2 w-60 flex flex-col"
        >
          <h1 className="font-bold mb-2">{address.address_name}</h1>
          <p>
            {address.address_street} {address.address_house_number}
          </p>
          <p>
            {address.address_zip_code} {address.address_city}
          </p>
          <p>{address.address_state}</p>
          <div className="flex items-center justify-between gap-4 mt-4">
            <button className="py-2 px-4 w-full text-sm rounded-md flex items-center gap-1 bg-slate-100 text-black">
              <FiEdit /> Edit
            </button>
            <button
              onClick={() => handleDeleteAddress(address.id)}
              className="py-2 px-4 w-full text-sm rounded-md flex items-center gap-1  bg-red-100 text-red-400"
            >
              <GoTrash /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectAddress;
