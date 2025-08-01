import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-12 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          GitHub User Finder
        </h1>
        <p className="mt-2 text-lg text-indigo-100">
          Type any GitHub username to see their profile & projects.
        </p>
      </div>
    </header>
  );
}


export default Header;
