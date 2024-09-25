import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <div>
      {/* banner */}
      <div className="bg-[url('/images/contact-us-banner.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="bg-black min-h-screen bg-opacity-50 flex items-center justify-center">
          <h1 className=" text-white text-5xl md:text-6xl font-semibold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Details */}
      <div className="py-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 md:gap-x-6">
          <div className="text-center border-2 border-brown100 rounded-lg py-10 px-5">
            <img src="/icons/Location.svg" alt="location" className="mx-auto" />

            <h1 className="mt-5 text-lg lg:text-xl font-semibold text-brown900 mb-1">
              Office Location
            </h1>
            <p className="text-[#333333] text-center">
              550, South St, Anaikkadu, Tamil Nadu, 614602, India
            </p>
          </div>
          <div className="text-center border-2 border-brown100 rounded-lg py-10 px-5">
            <img src="/icons/Mail-2.svg" alt="location" className="mx-auto" />

            <h1 className="mt-5 text-lg font-semibold text-brown900 mb-1 break-words">
              sales@jdsinternationalexports.com
              jdsinternationalexports@gmail.com
            </h1>
            <p className="mt-3 text-[#333333] text-center">
              Email us anytime for any kind roquette
            </p>
          </div>
          <div className="text-center border-2 border-brown100 rounded-lg py-10 px-5">
            <img src="/icons/Calling.svg" alt="location" className="mx-auto" />

            <h1 className="mt-5 text-lg lg:text-xl font-semibold text-brown900 mb-1">
              +91 75020 12602
            </h1>
            <p className="text-[#333333] text-center">
              Call us any kind supper, we will wait for it
            </p>
          </div>
        </div>
      </div>

      {/* Contactus Form */}
      <ContactUs />

      {/* Verifications */}
      <div className="py-14 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="bg-brown500 rounded-lg px-10 py-10 grid xl:flex items-center justify-center space-y-8 xl:space-y-0 xl:justify-between">
            <div className="flex justify-between w-1/2">
              <img src="/images/coir-board-gov.png" alt="coir-board-gov" />
              <img src="/images/fieo.png" alt="fieo" />
            </div>
            <img src="/images/msme.png" alt="msme" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
