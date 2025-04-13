import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log("");

  return (
    <header className="bg-[#4A9200] text-[#FCEB4F] p-4 shadow-md border-b-2">
      <div className="container mx-auto flex justify-evenly md:justify-between items-center flex-row">
        <h1 className="text-xl font-semibold">
          <img className="w-[150px]" src="/logo.png" alt="" />
        </h1>
        <nav>
          <ul
            className={`md:flex gap-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <Link to="/" className="hover:underline text-2xl font-semibold">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:underline text-2xl font-semibold"
              >
                من نحن
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:underline text-2xl font-semibold focus:outline-none"
              >
                خدماتنا ▾
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-20">
                  <li>
                    <Link
                      to="/services/sweets"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      مشاريع الحلويات
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/accessories"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      مشاريع الاكسسورات
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/clothes"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      مشاريع الملابس
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/cosmetics"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      مستحضرات التجميل
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <button
          className="text-[40px] md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
}
