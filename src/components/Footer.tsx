import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">BHUKKAD</h3>
            <p className="text-sm text-gray-300">
              Authentic Indian flavors delivered to your doorstep. Experience the taste of home-cooked meals 
              with our carefully crafted menu featuring traditional recipes passed down through generations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/cart" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cart
                </a>
              </li>
              <li>
                <a href="/delivery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Track Orders
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Account
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Contact BHUKKAD</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📧 Email: orders@bhukkad.com</p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>📍 Address: 123 Spice Street, Food City, India</p>
              <p>🕐 Hours: 11:00 AM - 11:00 PM Daily</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 BHUKKAD. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  )
}
