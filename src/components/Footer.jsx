import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown50 pt-14 pb-5 px-8 md:px-16 lg:px-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:flex justify-between">
        <div className="flex sm:space-x-4 xl:space-x-8">
          <div className="hidden sm:block">
            <img src="/images/footer-logo.png" alt="JDS exports" />
          </div>

          <div>
            <h1 className="font-bold text-brown900 text-2xl mb-3">
              JDS International Exports
            </h1>
            <p className="text-[#333333] max-w-64 xl:max-w-md">
              Over the past 40 years, our family had standard experience growing
              coconuts on our farms with immediate production farms to the
              growing medium. We are successful third-generation young
              entrepreneurs focusing on long-term business. So, we started a new
              venture in the same industry to add more valuable products.
            </p>

            <div className="mt-8 flex items-center space-x-3 xl:space-x-5">
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-brown800 hover:bg-brown900 rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img
                    src="/images/instagram.png"
                    alt="instagram"
                    className=""
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/jds-international-exports"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-brown800 hover:bg-brown900 rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/linkedin.png" alt="linkedin" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-brown800 hover:bg-brown900 rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/youtube.png" alt="youtube" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-brown800 hover:bg-brown900 rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/facebook.png" alt="facebook" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-brown800 hover:bg-brown900 rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/twitterX.png" alt="twitterX" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center mt-8 md:mt-0 sm:ml-20 xl:-ml-20">
          <div>
            <h1 className="font-bold text-brown900 text-2xl mb-5">
              Quick Links
            </h1>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="footer-active-nav text-brown500! font-semibold"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="footer-active-nav text-brown500! font-semibold"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="footer-active-nav text-brown500! font-semibold"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="footer-active-nav text-brown500! font-semibold"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:ml-20 xl:ml-0">
          <h1 className="font-bold text-brown900 text-2xl mb-5 mt-8 lg:mt-0">
            Contact us
          </h1>

          <div className="space-y-5">
            <div className="flex w-full space-x-3">
              <div>
                <img src="/icons/Mail.svg" alt="mail" className="w-6" />
              </div>
              <div className="w-full">
                <a href="mailto:jdsinternationalexports@gmail.com">
                  <h1 className="text-brown900 font-semibold -mt-1">Mail Us</h1>
                  <p className="text-[#333333] break-all">
                    sales@jdsinternationalexports.com <br />
                    jdsinternationalexports@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <img src="/icons/Call.svg" alt="call" className="w-6" />
              </div>
              <div>
                <a href="tel:+91 75020 12602">
                  <h1 className="text-brown900 font-semibold">Call Us</h1>
                  <p className="text-[#333333]">+91 75020 12602</p>
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <img src="/icons/Send.svg" alt="location" className="w-6" />
              </div>
              <div>
                <h1 className="text-brown900 font-semibold">Location</h1>
                <p className="text-[#333333]">11°43'41.5"N 66°45'02.5"F</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-brown900 text-sm">
        All copyright@2024 at JDS International Exports Design & developed by
        ZEN HOOK
      </p>
    </footer>
  );
};

export default Footer;
