import { FC } from 'react'
import Image from 'next/image'
import Hero from '../public/imgs/hero-bg.png'
const Content: FC = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500  to-red-500 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">A Simple Bookmark Manager</h2>
          <p className="text-bookmark-grey mb-6 text-lg text-center lg:text-left whitespace-normal">A clean and simple interface to organize your favorite websites.Open a new browser tab and see load infinity. Try it fo free!</p>

          {/* Buttons */}
          <div className="flex justify-center flex-wrap gap-6">
            <button className="btn nm-convex-white hover:nm-concave-bookmark-white active:nm-inset-white">Get it on Chrome</button>
            <button className="btn nm-convex-white hover:nm-concave-bookmark-white active:nm-inset-white">Get it on Firefox</button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <Image quality={100} src={Hero} alt="Bookmark" className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" />
        </div>
      </div>

      {/* Rounded rectagle */}
      <div
        className="hidden 
        md:block overflow-hidden 
        bg-bookmark-purple rounded-l-full 
        absolute h-80 w-2/6 top-32 right-0 
        lg:-bottom-28 lg:-right-30"
      ></div>
    </section>
  )
}

export default Content
