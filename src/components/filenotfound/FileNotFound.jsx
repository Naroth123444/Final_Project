import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

export default function FileNotFound() {
  return (
    <section className="w-full h-screen flex flex-col  bg-gray-100 text-center">
      <div className="w-full h-full flex flex-col items-center ">
        {/* 404 Animation Placeholder */}
        <div className="w-full h-1/2 flex justify-center items-center bg-gray-200 mb-6">
          <div className="text-xl text-gray-500">
            <DotLottieReact
              className="h-56"
              src="https://lottie.host/48247325-f9f8-42e5-8d5e-cf2c21ad1d2a/eoTrfPuA4E.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <h1 className="text-h1-small md:text-h1-medium lg:text-h1-large font-bold text-primary mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-body-detail-small md:text-detail-medium lg:text-detail-large mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="medium-button">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
