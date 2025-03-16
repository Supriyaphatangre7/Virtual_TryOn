import React from "react";

function CardsHome() {
  const products = [
    {
      id: 1,
      title: "Men's T-Shirt",
      description: "Comfortable and stylish cotton t-shirt for everyday wear.",
      price: "$19.99",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 2,
      title: "Women's Denim Jacket",
      description:
        "Classic denim jacket with a modern fit, perfect for any season.",
      price: "$49.99",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 3,
      title: "Casual Hoodie",
      description:
        "Soft and cozy hoodie with a relaxed fit for all-day comfort.",
      price: "$39.99",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 4,
      title: "Men's Slim Fit Jeans",
      description: "Stretchable slim-fit jeans with a trendy look.",
      price: "$59.99",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 5,
      title: "Women's Summer Dress",
      description:
        "Lightweight and breathable floral dress for summer outings.",
      price: "$34.99",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <>
      <div className="relative flex items-center justify-center h-screen w-screen">
        <div className="flex justify-center items-center relative w-full h-full">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card bg-base-100 w-80 shadow-lg text-center rounded-2xl transition-transform transform absolute duration-300 hover:scale-110 hover:z-10"
              style={{
                left: `${index * 10}%`,
                transform: `translateX(-${index * 10}%)`,
              }}
            >
              <figure className="rounded-t-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full"
                />
              </figure>
              <div className="card-body flex flex-col items-center rounded-b-2xl">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <span className="font-semibold">{product.price}</span>
                <div className="rating rating-lg">
                  <input
                    type="radio"
                    name={`rating-${product.id}`}
                    className="mask mask-star-2"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${product.id}`}
                    className="mask mask-star-2"
                    aria-label="2 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${product.id}`}
                    className="mask mask-star-2"
                    aria-label="3 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name={`rating-${product.id}`}
                    className="mask mask-star-2"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name={`rating-${product.id}`}
                    className="mask mask-star-2"
                    aria-label="5 star"
                  />
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary w-full rounded-b-2xl">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsHome;
