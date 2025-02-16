import React from "react";

const Subheader = () => {
  return (
    <div className="dropdown-menu absolute hidden left-1/2 z-30 top-8 -translate-x-[50%]  h-fit w-[50vw] px-4 py-4 bg-white shadow-lg rounded-md transition duration-300 ease-in-out">
      <div className="grid grid-cols-4 px-10 py-4 gap-4">
        <div className="flex flex-col px-2 border-r border-grey">
          <h1 className="font-bold">Men</h1>
          <ul className="flex flex-col mt-4 gap-2">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Jackets</li>
            <li>Blazers and Coats</li>
          </ul>
          <div className="flex flex-col my-4">
            <h1 className="font-bold mb-2">Indian & Festive Wear</h1>
            <ul className="flex flex-col gap-2">
              <li>Kurtas & Kurta Sets</li>
              <li>Sherwanis</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-2 border-r border-grey">
          <h1 className="font-bold">Women</h1>
          <ul className="flex flex-col mt-4 gap-2">
            <li>Kurtas & Suits</li>
            <li>Sareas</li>
            <li>Ethnic Wear</li>
            <li>Lehenga Cholis</li>
            <li>Jackets</li>
          </ul>
          <div className="flex flex-col my-4">
            <h1 className="font-bold mb-2">Western Wear</h1>
            <ul className="flex flex-col gap-2">
              <li>Dresses</li>
              <li>Jumpsuits</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-2 border-r border-grey">
          <h1 className="font-bold">Footwear</h1>
          <ul className="flex flex-col mt-4 gap-2">
            <li>Flats</li>
            <li>Casual Shoes</li>
            <li>Heels</li>
            <li>Boots</li>
            <li>Sports Shoes & Floaters</li>
          </ul>
          <div className="flex flex-col my-4">
            <h1 className="font-bold mb-2">Product Features</h1>
            <ul className="flex flex-col gap-2">
              <li>360 Product Viewer</li>
              <li>Product with Video</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-2 ">
          <h1 className="font-bold">Kids</h1>
          <ul className="flex flex-col mt-4 gap-2">
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Party Wear</li>
            <li>Track Pants</li>
            <li>Value Pack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
