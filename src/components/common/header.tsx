import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <header className="bg-amber-50 border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-amber-800"
          >
            ☕ Cuddle Cup
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-amber-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className="text-gray-700 hover:text-amber-700"
            >
              Menu
            </NavLink>

            <NavLink
              to="/about"
              className="text-gray-700 hover:text-amber-700"
            >
              About
            </NavLink>

            <NavLink 
            to="/contact"
            className="text-gray-700 hover:text-amber-700"
            >
          
               
               Contact
            </NavLink>
          </nav>

        </div>
      </div>
    </header>
  );
}