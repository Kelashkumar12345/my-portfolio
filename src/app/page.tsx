

"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [openTab, setOpenTab] = useState('home'); // State to track active tab

  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <ul className="space-y-4">
          <li>
            <button
              className={`block w-full text-left py-2 px-4 rounded ${openTab === 'home' ? 'bg-gray-500' : ''}`}
              onClick={() => setOpenTab('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left py-2 px-4 rounded ${openTab === 'about' ? 'bg-yellow-500' : ''}`}
              onClick={() => setOpenTab('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left py-2 px-4 rounded ${openTab === 'contact' ? 'bg-yellow-500' : ''}`}
              onClick={() => setOpenTab('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-yellow-400">
        {openTab === 'home' && (
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
            {/* Left Side Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Hello, my name is Kelash Kumar</h1>
              <p className="text-lg mb-4">
                I am a passionate <span className="font-bold">UI/UX Designer</span>.
                I love creating clean and user-friendly interfaces.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="/projects" className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                  Projects
                </Link>
                <a href="https://www.linkedin.com" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-md">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8">
              <Image
                src="/kelash_profile.jpg" // Ensure the path is correct
                alt="Kelash Kumar"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        )}

        {openTab === 'about' && (
          <div>
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4">I am a designer with a passion for UI/UX, based in India...</p>
          </div>
        )}

        {openTab === 'contact' && (
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-4">You can reach me via email at kelash@example.com...</p>
          </div>
        )}
      </div>
    </main>
  );
}

  

