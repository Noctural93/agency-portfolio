import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="w-full text-center py-6 mt-10 text-sm text-gray-400">
      © {new Date().getFullYear()} MyAgency. All rights reserved.
    </footer>
  )
}

export default Footer
