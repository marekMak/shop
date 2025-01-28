import Header from "@/components/Header";
import Heading from "@/components/Heading";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="min-h-screen flex justify-center px-6">
        <div className="bg-grey-light w-full h-[90%]">
          <div className="flex flex-col h-full w-full md:w-4/5 text-justify  px-10 md:px-40 py-10 gap-8">
            <Heading title="Our Story" />
            <p>
              In a world brimming with fashion choices, standing out takes more
              than just exclusive products. It requires a deep understanding of
              what truly matters to customers. Enter Krist, an exceptional
              eCommerce fashion store where every piece tells a story, and every
              customer is part of a family.
            </p>
            <Heading title="The Krist Philosophy" />
            <p>
              At Krist, the cornerstone of their philosophy is pro-client
              orientation. This means going beyond merely offering high-quality
              items. It’s about crafting an experience that resonates with
              customers on a personal level. Every interaction is imbued with
              care, ensuring that clients feel valued, understood, and
              celebrated. Krist’s dedication to customers starts the moment they
              land on the website. The intuitive design, personalized
              recommendations, and seamless navigation speak volumes about their
              commitment to excellence. From curated collections to tailored
              suggestions, every detail is meticulously designed to cater to the
              unique tastes and preferences of each individual.
            </p>

            <Heading title="Exclusive Products for the Discerning Shopper" />
            <p>
              Krist’s inventory is a treasure trove of exclusivity. From
              limited-edition pieces to handcrafted designs, their selection is
              a celebration of rarity and craftsmanship. Each product is
              carefully sourced to ensure it meets the highest standards of
              quality and style. This isn’t just shopping; it’s an invitation to
              own a piece of art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
