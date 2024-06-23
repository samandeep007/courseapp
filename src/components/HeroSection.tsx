'use client'
import React from 'react'
import Link from "next/link"
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";



/**
 * Renders the HeroSection component.
 * 
 * The HeroSection component displays a hero section with a title, description, and a link to explore courses.
 * 
 * @returns The rendered HeroSection component.
 */


export default function HeroSection() {
    return (
        <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="p-4 relative z-10 w-full text-center">

                <h1 className="mt-20 md:mt-0 text-4xl md:text-8xl md:text-wrap font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>

                <p className="mt-4 font-normal text-base md:text-2xl text-neutral-300 max-w-4xl mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>

                <div className="mt-4">
                    <Link href={"/courses"}>

                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore courses
                        </Button>

                    </Link>
                </div>
            </div>

        </div>
    )
}
