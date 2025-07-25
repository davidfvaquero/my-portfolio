import React from "react";

export default function ProjectDetail() {
  return (
    <section className="max-w-2xl mx-auto px-4 pt-24 sm:pt-32 pb-12">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">Project Detail</h1>
      <p className="text-base sm:text-lg text-gray-700 mb-4">
        Here you will find detailed information about the selected project.
      </p>
      {/* Dynamic project content goes here */}
    </section>
  );
} 