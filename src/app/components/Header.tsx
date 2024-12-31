import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#252B42]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-wrap justify-between items-center h-auto py-2">
          <div className="flex gap-4 items-center mb-2 sm:mb-0">
            <div className="flex gap-2 items-center">
              <i className="bi bi-telephone"></i>
              <p>(225) 555-0118</p>
            </div>
            <div className="flex gap-2 items-center">
              <i className="bi bi-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className="text-center mb-2 sm:mb-0">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Follow Us:</p>
            <div className="flex gap-2">
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-youtube"></i></a>
              <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#fff]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between h-auto py-2">
          <div className="mb-2 sm:mb-0">
            <h1 className="font-bold text-[24px]">Bandage</h1>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-auto gap-4 items-center">
            <div className="links flex gap-4 flex-wrap items-center">
              <Link href="/">Home</Link>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center gap-x-1.5 px-3 py-2">
                    Shop
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                      >
                        Products
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                      >
                        License
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Pages</Link>
            </div>

            <div className="flex gap-4 text-[#23A6F0] items-center">
              <div className="font-bold">
                <Link href="/">Login /</Link>
                <Link href="/">Register</Link>
              </div>
              <div className="flex gap-3">
                <button>
                  <i className="bi bi-search"></i>
                </button>
                <button className="flex gap-1 items-center">
                  <i className="bi bi-cart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
                <button className="flex gap-1 items-center">
                  <i className="bi bi-heart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
