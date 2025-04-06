import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import {
  accessoriesShops,
  clothesShops,
  cosmeticsShops,
  sweetShops,
} from "../data/shops";
import { useParams } from "react-router";

const Services = () => {
  const { service } = useParams();
  let shops;

  switch (service) {
    case "sweets":
      shops = sweetShops;
      break;
    case "accessories":
      shops = accessoriesShops;
      break;
    case "clothes":
      shops = clothesShops;
      break;
    case "cosmetics":
      shops = cosmeticsShops;
      break;

    default:
      break;
  }
  return (
    <div>
      <Header />
      <div className="w-full p-6 bg-[#4A9200] flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-[#FCEB4F] mb-16">
          متاجرنا المميزة
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shops.map((shop, index) => (
            <Card
              key={index}
              image={shop.image}
              title={shop.title}
              description={shop.description}
              details={shop.details}
              instagramUrl={shop.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
