import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Category } from "./components/Category";
import { data } from "./components/data";
import { FeaturePrd } from "./components/FeaturePrd";
import { Images } from "./components/Images";
import Footer from "./components/Footer";
import { UpperImage } from "./components/UpperImage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <UpperImage />
    <Services />
    <h1 className="text-center text-4xl font-bold mt-14">Categories</h1>
    <div className="flex flex-wrap justify-evenly gap-10 ">
      {data.slice(0, 12).map((item) => {
        return (
          <>
            <Category
              key={item.id}
              img={item.image}
              category={item.category}
              product={item.rating.count}
            />
          </>
        );
      })}
    </div>

    <h1 className="text-center text-4xl font-bold mt-20">Feature Products</h1>
    <div className="flex flex-wrap justify-evenly gap-10 ">
      {data.slice(11, 20).map((item) => {
        return (
          <>
            <FeaturePrd
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
            />
          </>
        );
      })}
    </div>

    <Images />

    <h1 className="text-center text-3xl font-bold mt-20 ">RECENT PRODUCTS</h1>
    <div className="flex flex-wrap justify-evenly gap-10 ">
      {data.slice(11, 20).map((item) => {
        return (
          <>
            <FeaturePrd
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
            />
          </>
        );
      })}
    </div>

    <Footer />
  </React.StrictMode>
);
