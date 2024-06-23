"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music_courses.json";
import Link from "next/link";

//Since we are using TypeScript, we can define the type of the course object
//We can specify the data type of each property in the object
//It makes sure that we are passing the correct data type to the component
//This is useful for debugging and catching errors early

interface Course{ 
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}


export default function FeaturedCourses() {
    const courses = courseData.courses.filter((course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-950">
      <div className="text-center">
        <div>
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-center">
{

    courses.map((course:Course) => (<div key={course.id} className="flex justify-center">
      <BackgroundGradient
      className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
              <Link href={`/courses/${course.slug}`}>
              <button className="bg-transparent border-gray-600 border-[2px] mt-5 hover:bg-black hover:shadow-white hover:shadow-sm px-3 py-1 rounded-lg">
                Learn More
              </button>
              </Link>
              
          </div>
      </BackgroundGradient>
  </div>))
}

        </div>
      </div>
      <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded-xl border border-neutral-600 text-gray-100 bg-transparent hover:bg-black transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  );
}
