import { Button, Icon, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import gsap from "gsap"
import React, { useEffect } from 'react'

export default function Hero () {
  const animateComponents = () => {
    const timeline = gsap.timeline({
      paused: false, // default is false
      smoothChildTiming: true,
      autoRemoveChildren: true,
    })
    const elements = ['.pyramid', '.icos']
    elements.map((element) => {
      timeline.fromTo(
        element,
        {
          opacity: 0,
          ease: 'ease-in-out',
        },
        {
          opacity: 1,
          duration: 0.8,
          display: "block"
        },
      )
      return element
    })

    timeline.play()
  }
  useEffect(() => {
    animateComponents()
  }, [])
  return (
    <div className=''>
      <div className="relative h-screen md:mb-auto mb-36 flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-transparent md:bg-[url(/lines.svg)] bg-[url(/mobile-lines.svg)] bg-cover text-white p-4">
        </div>

        {/* large screens */}
        <div className="absolute h-full hidden md:block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white p-4">
          {/* <div className='absolute top-12 left-16 pyramid hidden'>
            <img src="/pyramid.png" className='h-32' alt="pyramid" />
          </div>
          <div className='absolute -bottom-16 left-[460px] text-black icos hidden'>
            <img src="/icosahedron.png" className='h-32' alt="pyramid" />
          </div> */}
        </div>

        {/* small screen */}
        <div className="absolute h-full md:hidden block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white p-4">
          {/* <div className='absolute top-12 left-5 pyramid hidden'>
            <img src="/pyramid.png" className='h-32' alt="pyramid" />
          </div>
          <div className='absolute bottom-16 -left-4 text-black icos hidden'>
            <img src="/half-icos.png" className='h-32' alt="pyramid" />
          </div> */}
        </div>

        {/* small screens */}
        <div className="absolute top-0 block md:hidden h-full w-full left-0 right-0 bg-transparent text-white p-4">
          <div className='flex md:flex-row flex-col md:justify-between h-full justify-center'>
            <div className='flex flex-col justify-center w-full md:w-[50%]'>

              <div className='text-white w-full md:w-[70%] font-light mt-4 text-center'>
                Harness the Future of SaaS Excellence. Elevate productivity, streamline workflows, and achieve success with our cutting-edge software solutions. Transform the way you work – Nykon is your gateway to innovation in the digital age.
              </div>
              <div className='flex gap-4 mt-8 justify-center'>

              </div>
              <div className='w-full flex justify-center'>
              </div>
              <div className='h-12'></div>
            </div>
          </div>
        </div>

        {/* big screens */}
        <div className="absolute top-0 md:block hidden h-full w-full left-0 right-0 bg-transparent text-white p-4">
          <div className='flex md:flex-row flex-col md:justify-center h-full justify-end px-12'>
            <div className='flex flex-col justify-center items-center w-full md:w-[70%]'>
              <h1 className='text-white font-bold text-5xl text-center'>
                Elevate Your Business with Powerful SaaS Solutions
              </h1>
              <div className='text-white w-full md:w-[85%] text-center font-light mt-4'>
                Harness the Future of SaaS Excellence. Elevate productivity, streamline workflows, and achieve success with our cutting-edge software solutions. Transform the way you work – Nykon is your gateway to innovation in the digital age.
              </div>
              <div className='flex gap-3 mt-4'>
                <button className='bg-white rounded-lg text-[#125D56] px-5 py-2'>Get in touch</button>
              </div>
              <div className='h-12'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
