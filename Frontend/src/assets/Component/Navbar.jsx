import React from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {FiBookOpen,FiHeart,FiBell,FiUser,FiClock,FiLogIn,FiUserPlus,FiHome,FiInfo,FiPhone,FiTool} from 'react-icons/fi';

const userProfileImage = 'https://i.pravatar.cc/150?img=2';

function Navbar() {
const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const LinksNoLogin = [
    { to: '/', icon: <FiHome className="text-2xl" />, label: 'Home' },
    { to: '/About', icon: <FiInfo className="text-2xl" />, label: 'About' },
    { to: '/Services', icon: <FiTool className="text-2xl" />, label: 'Services' },
    { to: '/Contact', icon: <FiPhone className="text-2xl" />, label: 'Contact' },
    { to: '/login', icon: <FiLogIn className="text-2xl" />, label: 'Login' },
  ];

  const LinksOkLogin = [
    { to: '/booking', icon: <FiBookOpen className="text-2xl" />, label: 'Booking' },
    { to: '/appointments', icon: <FiClock className="text-2xl" />, label: 'Appointment' },
    { to: '/saved', icon: <FiHeart className="text-2xl" />, label: 'Saved' },
    { to: '/notifications', icon: <FiBell className="text-2xl" />, label: 'Notifications' },
    { to: '/profile', icon: <FiUser className="text-2xl" />, label: 'Profile' },
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
          onClick={() => navigate('/signup')}
          aria-label="signup"
        >
          <FiUserPlus />
          
        </button>
        )}

        {/* Desktop Menu */}
        {isLoggedIn? (
                  <div className="hidden lg:flex flex-row gap-9 items-center">
                  <nav>
                    <ul className="flex flex-row gap-8 items-center">
                      {LinksOkLogin.slice(0, 4).map(({ to,icon,label }) => (
                        <li key={to}>
                          <NavLink
                            to={to}
                            className={({ isActive }) =>
                              `flex items-center gap-1 text-xl px-2 py-1 rounded-md transition-colors duration-200 ${
                                isActive
                                  ? 'text-blue-600 font-semibold bg-blue-100'
                                  : 'text-gray-700 hover:text-blue-500'
                              }`
                            }
                            end={to === '/'}
                            
                          >
                            <span className="text-2xl">{icon}</span>
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
        
                  {/* Login/Signup */}
                  
                  <button
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500"
                  onClick={() => navigate('/profile')}
                  aria-label="Profile"
                >
                  <img
                    src={userProfileImage}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </button>

                </div>
        ):(        <div className="hidden lg:flex flex-row gap-9 items-center">
          <nav>
            <ul className="flex flex-row gap-8 items-center">
              {LinksNoLogin.slice(0, 4).map(({ to,icon,label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-xl px-2 py-1 rounded-md transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-600 font-semibold bg-blue-100'
                          : 'text-gray-700 hover:text-blue-500'
                      }`
                    }
                    end={to === '/'}
                  >
                    <span className="text-2xl">{icon}</span>
                    {label}
                  </NavLink>
                </li>
              ))}
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
        </div>)}
      </div>

      {/* Bottom Navbar for Mobile */}
      {isLoggedIn ? (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-around items-center z-10 border-t border-gray-300 shadow-md">
          {LinksOkLogin.map(({ to, icon, label }) => {
            const isActive = location.pathname === to;

            return (
              <button
                key={to}
                onClick={() => navigate(to)}
                className={`flex flex-col items-center justify-center px-2 cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-green-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <div className="pb-1">{icon}</div>
                <span className="text-xs font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-around items-center z-10 border-t border-gray-300 shadow-md">
          {LinksNoLogin.map(({ to, icon, label }) => {
            const isActive = location.pathname === to;

            return (
              <button
                key={to}
                onClick={() => navigate(to)}
                className={`flex flex-col items-center justify-center px-2 cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-green-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <div className="pb-1">{icon}</div>
                <span className="text-xs font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Navbar;
