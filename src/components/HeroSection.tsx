'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from "@/utils/cn";
import { Spotlight } from './ui/Spotlight'



/**
 * Renders the HeroSection component.
 * 
 * The HeroSection component displays a hero section with a title, description, and a link to explore courses.
 * 
 * @returns The rendered HeroSection component.
 */


export default function HeroSection() {
  return (
    <div className='h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      
        <div className="p-4 relative z-10 w-full text-center">

        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> 
            
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
            
            <p className="mt-4 font-normal text-base md:text-xl text-neutral-300 max-w-2xl mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            
            <div className="mt-4">
                <Link href={'/courses'}>
                Explore Courses
                </Link>
            </div>
        </div>
      
    </div>
  )
}
