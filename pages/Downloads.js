import Image from "next/image";

const Downloads = () => {
  return (
    <section className="py-20 mt-20">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2">
        <h2 className="text-3xl text-center text-bookmark-purple">
          Download extension
        </h2>
        <p className="text-center text-bookmark-grey mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          praesentium quisquam debitis ipsam recusandae asperiores ullam
        </p>
      </div>

      {/* Card */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16 ">
        {/* Card #1 */}
        <div className="flex flex-col rounded-md shadow-lg bg-purple-100 lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <Image
              src="/imgs/logo-chrome.svg"
              width={64}
              height={64}
              alt="Chrome"
            />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-green-500">Chrome</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-green-500">80</span>
            </p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex justify-center py-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-green-500 hover:text-bookmark-white"
            >
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* Card #2 */}
        <div className="flex flex-col rounded-md shadow-lg lg:my-8 bg-purple-100">
          <div className="p-6 flex flex-col items-center">
            <Image
              src="/imgs/logo-firefox.svg"
              width={64}
              height={64}
              alt="Chrome"
            />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-yellow-500">Firefox</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-yellow-500">92</span>
            </p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex justify-center py-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-yellow-500 hover:text-bookmark-white"
            >
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* Card #3 */}
        <div className="flex flex-col rounded-md shadow-lg lg:mt-16 bg-purple-100">
          <div className="p-6 flex flex-col items-center">
            <Image
              src="/imgs/logo-opera.svg"
              width={64}
              height={64}
              alt="Chrome"
            />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-red-500">Opera</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-red-500">10</span>
            </p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex justify-center py-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-red-500 hover:text-bookmark-white"
            >
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
