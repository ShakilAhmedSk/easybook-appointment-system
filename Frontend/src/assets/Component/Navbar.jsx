import { useLocation, useNavigate, NavLink } from 'react-router-dom';
const isLoggedIn = true; 
const userProfileImage = 'https://i.pravatar.cc/150?img=3'; 

import {
  FiLogIn,
  FiUserPlus,
  FiHome,
  FiInfo,
  FiPhone,
  FiTool
} from 'react-icons/fi';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const mobileLinks = [
    { to: '/', icon: <FiHome className="text-2xl" />, label: 'Home' },
    { to: '/About', icon: <FiInfo className="text-2xl" />, label: 'About' },
    { to: '/Services', icon: <FiTool className="text-2xl" />, label: 'Services' },
    { to: '/Contact', icon: <FiPhone className="text-2xl" />, label: 'Contact' },
    { to: '/signup', icon: <FiUserPlus className="text-2xl" />, label: 'Signup' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 flex justify-between px-4 py-2 bg-slate-300 h-16 items-center z-10">
        <h1 className="font-montserrat text-3xl font-bold text-red-500">EasyBook</h1>

        {/* Mobile Profile Button */}
        {isLoggedIn ? (
          <button
            className="lg:hidden w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500"
            onClick={() => navigate('/profile')}
            aria-label="Profile"
          >
            <img
              src={userProfileImage}
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>
        ) : (
          <button
            className="lg:hidden w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl"
            onClick={() => navigate('/login')}
            aria-label="Login"
          >
            <FiLogIn/>
          </button>
        )}


        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row gap-9 items-center">
          <nav>
            <ul className="flex flex-row gap-8 items-center">
              <li><NavLink to="/" className="text-xl hover:text-blue-500">Home</NavLink></li>
              <li><NavLink to="/About" className="text-xl hover:text-blue-500">About</NavLink></li>
              <li><NavLink to="/Services" className="text-xl hover:text-blue-500">Services</NavLink></li>
              <li><NavLink to="/Contact" className="text-xl hover:text-blue-500">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Login/Signup */}
          <div className="flex flex-row gap-3 items-center">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 text-lg text-gray-800 hover:text-blue-700 px-4 py-2"
            >
              <FiLogIn className="w-5 h-5" />
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="text-lg bg-blue-500 text-white px-4 py-1 rounded-3xl flex items-center gap-2"
            >
              <FiUserPlus className="w-5 h-5" />
              Signup
            </button>
          </div>
        </div>
      </div>


      {/* Bottom Navbar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-around items-center z-10 border-t border-gray-300 shadow-md">
        {mobileLinks.map(({ to, icon, label }) => {
          const isActive = location.pathname === to;
        
          return (
            <button
              key={to}
              onClick={() => navigate(to)}
              className={`flex flex-col items-center justify-center px-2 cursor-pointer transition-colors duration-200 ${
                isActive ? 'text-green-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className="pb-1">
                {icon}
              </div>
              <span className={`text-xs font-medium`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>

    </>
  );
}

export default Navbar;
