'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    '/images/Commercial3.jpeg',
    '/images/Residential3.jpeg',
    '/images/Commercial2.jpeg',
    '/images/Commercial4.jpeg',
    '/images/Residential4.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Spray Foam Insulation Project ${index + 1}`}
              fill
              priority
              className="object-cover brightness-75"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Advanced Insulation
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 drop-shadow-lg max-w-3xl mx-auto text-gray-200">
            Professional Spray Foam Insulation Services in Winnsboro, TX
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg shadow-xl hover:shadow-primary-500/25"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Residential */}
            <div className="group bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up border border-gray-200 dark:border-gray-600">
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Residential Insulation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Improve your home's energy efficiency and comfort with our professional spray foam insulation services.
              </p>
              <Link href="/services#residential" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Commercial */}
            <div className="group bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up [animation-delay:200ms] border border-gray-200 dark:border-gray-600">
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Commercial Insulation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive insulation solutions for commercial buildings, warehouses, and industrial facilities.
              </p>
              <Link href="/services#commercial" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Agricultural */}
            <div className="group bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up [animation-delay:400ms] border border-gray-200 dark:border-gray-600">
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Agricultural Insulation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Specialized insulation solutions for barns, storage facilities, and agricultural buildings.
              </p>
              <Link href="/services#agricultural" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Why Choose Advanced Insulation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="text-primary-600 dark:text-primary-400 text-5xl font-bold mb-4">20+</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Serving East Texas with excellence</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="text-primary-600 dark:text-primary-400 text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-300">Guaranteed quality service</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="text-primary-600 dark:text-primary-400 text-5xl font-bold mb-4">24/7</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Always here when you need us</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
              <div className="text-primary-600 dark:text-primary-400 text-5xl font-bold mb-4">1000+</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Successfully completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-700 dark:bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Improve Your Property's Insulation?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-100 text-primary-700 dark:text-primary-800 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white hover:scale-[1.02] hover:shadow-lg"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 