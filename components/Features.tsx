import { FC } from 'react'
import Image from 'next/image'
import Illustriation from '../public/imgs/illustration-features-tab-1.png'
import Illustriation2 from '../public/imgs/illustration-features-tab-2.png'
import Illustriation3 from '../public/imgs/illustration-features-tab-3.png'

const Features: FC = () => {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60" id="features">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2">
        <h2 className="text-3xl text-center text-bookmark-purple">Features</h2>
        <p className="text-center text-bookmark-grey mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium quisquam debitis ipsam recusandae asperiores ullam</p>
      </div>

      {/* Features #1 */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 lg:mb-0">
            <Image src={Illustriation} className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" alt="Bookmark" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
            <h1 className="text-3xl text-bookmark-blue ">Bookmark in one click</h1>
            <p className="text-3xl text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, fugit?</p>
            <button className="btn nm-concave-bookmark-white hover:nm-inset-bookmark-white">More info</button>
          </div>
        </div>
        {/* Rounded rectagle */}
        <div
          className="
        hidden lg:block 
        overflow-hidden bg-bookmark-purple 
        rounded-r-full 
        absolute 
        h-80 
        w-2/4
        -bottom-24 
        -left-36"
        ></div>
      </div>

      {/* Features #2 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 lg:mb-0">
            <Image src={Illustriation2} className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" alt="Bookmark" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
            <h1 className="text-3xl text-bookmark-blue ">Bookmark in one click</h1>
            <p className="text-3xl text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, fugit?</p>
            <button className="btn nm-concave-bookmark-white hover:nm-inset-bookmark-white">More info</button>
          </div>
        </div>
        {/* Rounded rectagle */}
        <div
          className="
        hidden lg:block 
        overflow-hidden 
        bg-bookmark-purple 
        rounded-l-full 
        absolute 
        h-80 
        w-2/5
        -bottom-24 
        right-0"
        ></div>
      </div>

      {/* Features #3 */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 lg:mb-0">
            <Image src={Illustriation3} className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" alt="Bookmark" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
            <h1 className="text-3xl text-bookmark-blue ">Share your bookmarks</h1>
            <p className="text-3xl text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, fugit?</p>
            <button className="btn nm-concave-bookmark-white hover:nm-inset-bookmark-white">More info</button>
          </div>
        </div>
        {/* Rounded rectagle */}
        <div
          className="
        hidden lg:block 
        overflow-hidden bg-bookmark-purple 
        rounded-r-full 
        absolute 
        h-80 
        w-2/4
        -bottom-24 
        -left-36"
        ></div>
      </div>
    </section>
  )
}

export default Features
