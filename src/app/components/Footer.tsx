// 
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div>
        {/* Top Section */}
        <div className="bg-[#FAFAFA]">
          <div className="max-w-[1050px] mx-auto flex flex-wrap justify-between items-center h-auto py-6 px-4">
            <div>
              <h2 className="font-bold text-[24px]">Bandage</h2>
            </div>
            <div className="flex gap-[20px] text-[#23A6F0]">
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-10 bg-white">
          <div className="max-w-[1050px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company Info</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                      Feature 1
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Feature 2
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Feature 3
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Feature 4
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                  <li>
                    <a href="/" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Guides
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5 */}
              <div className="col-span-1 sm:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <input
                    className="bg-[#F9F9F9] py-3 px-4 rounded-[5px] border border-[#E6E6E6] w-full sm:w-auto flex-1"
                    placeholder="Your Email"
                    type="email"
                  />
                  <button
                    className="bg-[#23A6F0] px-6 py-3 text-white rounded-[5px] font-medium"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-[#737373] mt-4 text-[14px]">
                  Lore ipsum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#FAFAFA]">
          <div className="max-w-[1050px] mx-auto py-4 px-4 text-center text-[14px]">
            <p className="text-gray-600">
              Made By Afshan Usman. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
