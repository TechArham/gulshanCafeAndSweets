import Link from "next/link";
import React from "react";

const ContactHeader = () => {
  return (
    <div className="bg-white">
      <section
        className="relative h-[400px] flex items-center bg-[#e9c590] justify-start bg-cover bg-center"
        style={{
          backgroundImage: "url('/breadcumb-bg.jpg')", // replace with your image
        }}
      >
        <div className="max-w-[1500px] w-full mx-auto px-4">
          <div className="relative z-10 text-left">
            <h1 className="text-black font-extrabold leading-tight uppercase font-barlow text-4xl md:text-5xl">
              Contact us
            </h1>
            <div className="mt-4 text-lg md:text-xl text-black font-semibold">
              <Link href="/" className="text-red-600">
                Home
              </Link>{" "}
              / Contact us
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHeader;
