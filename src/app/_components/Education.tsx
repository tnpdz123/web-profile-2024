import React from "react";
import Card from "./common/Card";

const Education = () => {
  return (
    <Card title="Education">
      <div className="border-l-4 border-blue-500 p-4">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="h-3 w-3 rounded-full border border-white bg-blue-500 mr-2"></div>
            <div className="text-sm font-semibold text-gray-500">
              January 2024
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-md">
            <h2 className="text-sm font-semibold mb-1">Walailak University</h2>
            <p className="text-xs text-gray-600">Bachelor's Degree in Computer Science</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="h-3 w-3 rounded-full border border-white bg-blue-500 mr-2"></div>
            <div className="text-sm font-semibold text-gray-500">
              March 2021
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-md">
            <h2 className="text-sm font-semibold mb-1">ST School</h2>
            <p className="text-xs text-gray-600">High School Diploma</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="h-3 w-3 rounded-full border border-white bg-blue-500 mr-2"></div>
            <div className="text-sm font-semibold text-gray-500">
              January 2018
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-md">
            <h2 className="text-sm font-semibold mb-1">NPM School</h2>
            <p className="text-xs text-gray-600">Primary School</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
