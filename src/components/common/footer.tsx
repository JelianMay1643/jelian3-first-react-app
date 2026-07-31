import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-amber-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <nav className="flex items-center space-x-6">
            <NavLink to="/" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">Home</NavLink>
            <NavLink to="/menu" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">Menu</NavLink>
            <NavLink to="/about" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">About</NavLink>
            <NavLink to="/contact" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">Contact</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}