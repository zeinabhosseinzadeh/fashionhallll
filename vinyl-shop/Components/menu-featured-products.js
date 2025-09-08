import React from "react";
import productCard from "./product-card";

const FeaturedProducts = ({ products, onclick }) => {
  if (!products) return null;

  return (
    <>
      {products.map((product, key) => (
        <productCard
          key={key}
          product={product}
          hasVisuals={product.photos.main || product.photos.listing}
          showThumbs={product.photos.listing}
          className="is-featured"
          onclick={onclick}
        />
      ))}
    </>
  );
};

export default FeaturedProducts;
