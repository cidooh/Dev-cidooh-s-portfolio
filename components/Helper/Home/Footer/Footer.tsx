import React from 'react'

const Footer = () => {
  return (
    <div>
           <footer className="bg-gray-800 text-white py-6 text-center">
           <p>&copy; {new Date().getFullYear()} <a href="#" className="text-blue-500 hover:underline">Sidine Ouma</a>. All rights reserved.</p>
           </footer>
    </div>
  )
}

export default Footer