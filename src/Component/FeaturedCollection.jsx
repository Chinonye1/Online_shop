import React from "react";
import ProductCard from "./ProductCard";

const FeaturedCollection = () => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
    <div className="grid grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <ProductCard
          key={index}
          name="Jean & T-shirt"
          price="200.97"
          rating="4.9"
        />
      ))}
    </div>

    <h2 className="text-2xl font-bold mb-4">Newest Arrival</h2>
    <div class="grid grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <ProductCard
          key={index}
          name="Jean & T-shirt"
          price="200.97"
          rating="4.9"
        />
      ))}
    </div>
  </section>
);

export default FeaturedCollection;
