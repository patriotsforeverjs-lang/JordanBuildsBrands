import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold text-white mb-2">JordanBuildsBrands</h4>
            <p className="text-gray-400 max-w-sm">
              Data-driven marketing agency specializing in TikTok, Facebook, and Email/SMS campaigns that deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h5 className="font-bold text-white mb-4">Services</h5>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-gray-400 hover:text-white">TikTok Ads</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Facebook Campaigns</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Email & SMS</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Company</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Contact</h5>
              <ul className="space-y-2">
                <li><a href="mailto:jordanbuildsbrands@gmail.com" className="text-gray-400 hover:text-white">jordanbuildsbrands@gmail.com</a></li>
                <li><a href="tel:1234567890" className="text-gray-400 hover:text-white">(123) 456-7890</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} JordanBuildsBrands. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
              </svg>
            </Link>
            <Link href="https://x.com/JDInternetMoney" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.426.23-2.161.086.606 1.885 2.364 3.261 4.452 3.3-1.623 1.276-3.666 2.037-5.88 2.037-.381 0-.757-.022-1.126-.065 2.099 1.352 4.596 2.144 7.29 2.144 8.742 0 13.528-7.241 13.528-13.528 0-.206-.005-.412-.013-.617.928-.67 1.733-1.508 2.372-2.454z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


