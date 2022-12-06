import { FC } from "react";
const Contactus:FC = () => {
  return (
    <section className="bg-bookmark-purple text-bookmark-white py-20" id="contact">
      <div className="container">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto">
          <p className="text-center font-light uppercase mb-8">
            35,000+ already joined
          </p>
          <h1 className="text-3xl text-center">
            Stay up-to-date with what we&apos;re doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6  mt-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-2 py-3 rounded-md text-black nm-concave-bookmark-purple focus:outline-none focus:nm-inset-bookmark-purple focus:text-morp"
            />
            <button className="btn text-morp nm-concave-bookmark-purple hover:nm-inset-bookmark-purple">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
