import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Logo + About */}
      <div>
       <Image
  src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
  alt="Empire Blue"
  width={200}   // required
  height={50}   // required
  className="h-12 mb-4"
/>
        <p className="text-gray-600 text-sm leading-relaxed">
          Providing clean and safe water solutions for a healthier tomorrow.
          Our commitment to quality and innovation makes us the trusted choice
          in water treatment.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Latest News
            </a>
          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Water Testing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Water Purification
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Water Treatment
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Expert Consultation
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <span className="flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-blue-600 mt-1"></i>
              Empire Blue Pvt. Ltd. <br />
              Chhindwara, Madhya Pradesh, India
            </span>
          </li>
          <li>
            <a
              href="tel:+918867268719"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <i className="fas fa-phone text-blue-600"></i>
              +91 8867268719
            </a>
          </li>
          <li>
            <a
              href="mailto:info@empireblue.in"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <i className="fas fa-envelope text-blue-600"></i>
              info@empireblue.in
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
      <p>© 2025 Empire Blue. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-blue-600">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-600">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
