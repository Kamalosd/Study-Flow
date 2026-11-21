import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()

  return (
    <footer className="w-full bg-gray-900 text-white mt-10">

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-10">

        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">StudyFlow</h1>
          <p className="text-gray-400 leading-6">
            Your learning journey starts here. Improve your skills,
            explore new opportunities, and achieve your goals with StudyFlow.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Product</h2>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Study Help</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        <p>
          © {date.getFullYear()} StudyFlow. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
