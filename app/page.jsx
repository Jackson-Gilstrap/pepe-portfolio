"use client";
import { useState, useEffect } from "react";
import Card from "./components/card";
import { images } from "./lib/images";
const HomePage = () => {
  const [imagesList, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = () => {
      setLoading(true);
      fetch("http://localhost:8082/api/all-images")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Internal server error");
          }

          return response.json();
        })
        .then((data) => {
          console.log(data);
          setImages(data.body);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchImages();
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 text-center shadow-lg">
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Portfolio de Pepe
        </h1>
      </header>
      {loading ? (
        <div className="my-20">
          <h2 className="text-center text-gray-400 font-bold">Loading ... </h2>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mx-8 mt-10">
          {imagesList.map((image) => (
            <Card
              key={image.image_id}
              id={image.image_id}
              title={image.image_title}
              desc={image.image_desc}
              imageURL={image.image_url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
