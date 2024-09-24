import React from 'react';
import '../styles/footer.css'; 
const Footer = () => {
  return (
    
<footer class="bg-gray-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">About Us</h3>
        <p class="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Our Services</h3>
        <ul class="text-gray-400 space-y-2">
          <li><a href="#" class="hover:text-white transition-colors">Service 1</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Service 2</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Service 3</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Service 4</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Service 5</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Contact Us</h3>
        <ul class="text-gray-400 space-y-2">
          <li class="flex items-center">
            <i class="fas fa-map-marker-alt w-5 h-5 mr-2"></i>
            <span>123 Street, New York, USA</span>
          </li>
          <li class="flex items-center">
            <i class="fas fa-phone-alt w-5 h-5 mr-2"></i>
            <span>+1 (234) 567-890</span>
          </li>
          <li class="flex items-center">
            <i class="fas fa-envelope w-5 h-5 mr-2"></i>
            <span>info@example.com</span>
          </li>
        </ul>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
        <p class="text-gray-400 mb-4">
          Stay up-to-date with our latest news and updates.
        </p>
        <div class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-grow bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button class="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      <p class="text-gray-400 mt-4 md:mt-0">Designed by <a href="#" class="text-blue-500 hover:text-blue-400 transition-colors">Your Designer</a></p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
