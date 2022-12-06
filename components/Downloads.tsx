import { FC } from 'react'
import Image from 'next/image'
import Chrome from '../public/imgs/logo-chrome.svg'
import FireFox from '../public/imgs/logo-firefox.svg'
import Opera from '../public/imgs/logo-opera.svg'

const Downloads: FC = () => {
  return (
    <section className="py-20 mt-20" id="download">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2">
        <h2 className="text-3xl text-center text-bookmark-purple">Download extension</h2>
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-l from-red-700 to-purple-500 mt-4 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium quisquam debitis ipsam recusandae asperiores ullam</p>
      </div>

      {/* Card */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16 ">
        {/* Card #1 */}
        <div className="flex flex-col lg:mb-16 rounded-md border-2 border-green-500 hover:border-transparent hover:shadow-lg bg-gradient-to-b hover:from-green-200 ">
          <div className="p-6 flex flex-col items-center">
            <Image src={Chrome} alt="Chrome" className="animate-spin" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-green-500">Chrome</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-green-500">80</span>
            </p>
          </div>
          <hr className="border-b border-white" />
          <div className="flex justify-center py-6">
            <button type="button" className="btn btn-purple hover:bg-green-500 hover:text-bookmark-white animate-bounce">
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* Card #2 */}
        <div className="flex flex-col lg:my-8 rounded-md border-2 border-yellow-500 hover:border-transparent hover:shadow-lg bg-gradient-to-b hover:from-yellow-200">
          <div className="p-6 flex flex-col items-center">
            <Image src={FireFox} alt="Firefox" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-yellow-500">Firefox</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-yellow-500">92</span>
            </p>
          </div>
          <hr className="border-b border-white" />
          <div className="flex justify-center py-6">
            <button type="button" className="btn btn-purple hover:bg-yellow-500 hover:text-bookmark-white animate-bounce">
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* Card #3 */}
        <div className="flex flex-col lg:mt-16 rounded-md border-2 border-red-500 hover:border-transparent hover:shadow-lg bg-gradient-to-b hover:from-red-200">
          <div className="p-6 flex flex-col items-center">
            <Image src={Opera} alt="Opera" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
              Add to <span className="text-red-500">Opera</span>
            </h3>
            <p className="mb-2 text-bookmark-grey font-bold">
              Minimum version: <span className="text-red-500">10</span>
            </p>
          </div>
          <hr className="border-b border-white" />
          <div className="flex justify-center py-6">
            <button type="button" className="btn btn-purple hover:bg-red-500 hover:text-bookmark-white animate-bounce">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads
