"use client";

import { Button } from "@/components/ui/ButtonRounded";
import { Navbar } from "@/components/Navbar";
import { RecommendedCourses } from "@/components/RecommendedCourses";
import { AddCourses } from "@/components/courses/AddCourses";
import { SearchFilter } from "@/components/Filters";
import CourseDisplay from "@/components/courses/CourseDisplay";

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Wrapper for the two headings, Add Courses, Couse Display, and Search Filter components */}
      <div className="px-4 pb-32 pt-8 md:px-12 lg:px-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-full md:w-2/3">
              <h1 className="p-2 pl-1 text-center text-3xl font-black md:text-left">
                Add Courses
              </h1>
              <AddCourses />
            </div>
            <div className="w-full md:w-1/3">
              <h1 className="p-2 pl-1 text-center text-3xl font-black md:text-left">
                Courses
              </h1>
              <CourseDisplay />
            </div>
          </div>
          <div>
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
}
