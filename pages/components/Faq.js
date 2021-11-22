const Faq = () => {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2">
          <h2 className="text-3xl text-center text-bookmark-purple">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-bookmark-grey mt-4">
            Here are some of the most frequently asked questions about the
            Bookmark project. If you have any questions, please feel free to
            contact us.
          </p>
        </div>
        {/* FAQ items*/}
        <div className="flex flex-col sm:w-3/4 lg:w-6/12 mt-12 mx-auto">

          <div className="flex items-center border-b py-4 pl-1
          text-black hover:text-white rounded-lg bg-gradient-to-r from-blue-100
           hover:from-bookmark-purple "
          >
            <span className="flex-1">What is the Bookmark?</span>
            <i className="fas fa-chevron-down cursor-pointer text-bookmark-purple"></i>
          </div>
          <div className="flex items-center border-b py-4 pl-1
          text-black hover:text-white rounded-lg bg-gradient-to-r from-blue-100
           hover:from-bookmark-purple">
            <span className="flex-1">How can I request a new browser?</span>
            <i className="fas fa-chevron-down cursor-pointer text-bookmark-purple"></i>
          </div>
          <div className="flex items-center border-b py-4 pl-1
          text-black hover:text-white rounded-lg bg-gradient-to-r from-blue-100
           hover:from-bookmark-purple">
            <span className="flex-1">Is there a mobile app?</span>
            <i className="fas fa-chevron-down cursor-pointer text-bookmark-purple"></i>
          </div>
          <div className="flex items-center border-b py-4 pl-1
          text-black hover:text-white rounded-lg bg-gradient-to-r from-blue-100
           hover:from-bookmark-purple">
            <span className="flex-1">What about other chromium browsers?</span>
            <i className="fas fa-chevron-down cursor-pointer text-bookmark-purple"></i>
          </div>

          <button className="self-center btn btn-purple hover:bg-bookmark-white hover:text-bookmark-purple mt-7">
            More info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
