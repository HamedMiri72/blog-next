import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-6xl ">
        <b>Hey, hamed dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-16 flex items-center gap-12">
        <div className="relative h-[500px] flex-1">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="text-xl font-light text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="px-5 py-4 rounded-md border-none bg-blue-500 text-white w-max">Read More</button>
        </div>
      </div>
    </div>
  )
}
