"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ImagePage = () => {
  //   const image = images.find((img) => img.id === parseInt(slug));
 const {slug} = useParams()
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8082/api/one-image?slug=${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          return response.json();
        })
        .then((data) => {
            console.log(data.body)
          setImage(data.body);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {loading ? (
        <p className="text-xl text-center text-gray-400 font-bold">
          Loading ...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img
              src={image.image_url}
              alt={image.image_title}
              className="w-full max-w-md h-auto rounded shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-4">{image.image_title}</h1>
            <p className="text-gray-700 mb-6">{image.image_desc}</p>

            <p className="mt-4 bg-blue-500 text-white py-2 px-4 rounded ">
              Inquire?
            </p>
            <div>
              <p>
                Please contact Pepe at MorenoJ@hartwick.edu for more information
                about this painting
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePage;
