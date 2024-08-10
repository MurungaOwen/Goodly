// src/components/HeroSection.js
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 rounded-lg mx-2">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xnywGq6564T5gzeO7QFg-_gModxwfwbx7Q&s"
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Transforming Lives, One Child at a Time
        </h1>
        <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl mb-6">
          Join us in our mission to provide hope and support to street children and orphans in need. Your contribution can make a world of difference.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <Link 
            to="/donate" 
            className="bg-orange-400 text-white py-3 px-6 rounded hover:bg-orange-300 text-center">
            Donate Now
          </Link>
          <Link 
            to="/events" 
            className="bg-black text-white py-3 px-6 rounded border border-orange-400 hover:bg-gray-800 text-center">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
