"use client";
type States = {
  id: number;
  state_name: string;
};
import { fetchStates } from "@/utils/supabase/actions";
import { useState, useEffect } from "react";
import Select from "react-select";
const AddressForm = () => {
  const [states, setStates] = useState<States[]>([]);
  useEffect(() => {
    const loadStates = async () => {
      const response = await fetchStates();
      if (response.success) {
        setStates(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadStates();
  }, []);

  const mappedStates = states.map((state) => ({
    value: state.id,
    label: state.state_name,
  }));

  return (
    <form className="w-full md:w-[80%]">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
          placeholder="Mobile Number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Flat, House no., Building, Company, Apartment
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Area, Colony, Street, Sector, Village
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Zip code
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <Select
          options={mappedStates}
          isSearchable
          placeholder="select state"
        />
      </div>
    </form>
  );
};

export default AddressForm;
