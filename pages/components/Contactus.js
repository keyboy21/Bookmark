const Contactus = () => {
  return (
    <section className="bg-bookmark-purple text-bookmark-white py-20">
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
                className="outline-none flex-1 px-2 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            <button className="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
