import ContactUs from "../components/ContactUs";

const AboutUs = () => {
  return (
    <>
      {/* Image Section */}
      <section className="relative bg-[url('/images/aboutus-banner.png')] bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
        <h1 className=" text-white text-5xl md:text-6xl font-semibold">
          About Us
        </h1>
      </section>

      {/* History */}
      <section className="pt-8 md:pt-14 bg-brown50">
        <h1 className="mt-5 md:mt-0 text-3xl md:text-5xl text-center mb-10 text-brown900">
          About our Company
        </h1>
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-10 flex items-center">
              <div className="flex flex-col items-center">
                <img
                  src="/images/historyabout1.png"
                  alt="CoirProduct 1"
                  className="mb-4"
                />
                <img
                  src="/images/historyabout2.png"
                  alt="CoirProduct 2"
                  className="mb-4"
                />
              </div>
              <div className="-mt-16 sm:-mt-24 flex flex-col items-center">
                <img
                  src="/images/historyabout3.png"
                  alt="CoirProduct 3"
                  className="mb-4"
                />
                <img src="/images/historyabout4.png" alt="CoirProduct 4" />
              </div>
            </div>

            <div className="flex flex-col justify-start p-4">
              <h2 className="text-2xl font-bold text-brown800 mb-6">
                Our History in Coir Industry
              </h2>
              <h3 className="text-2xl font-semibold text-brown800 mb-6">
                Get to Know About Our Company
              </h3>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                Over the past 40 years, our family had standard experience
                growing coconuts on our farms with immediate production farms to
                the growing medium. We are successful third-generation young
                entrepreneurs focusing on long-term business. So, we started a
                new venture in the same industry to add more valuable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service */}
      <section className="pt-5 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">
                Customer Service
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                Through unparalleled customer service and providing excellent
                quality products, we aspire to excel in matching consistently
                the customer's expectations. Our customer service is swift,
                comfortable, individualized, and understanding. Our company
                delivers it by taking sufficient time in analyzing and
                recognizing customer needs.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/customerservice.png"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission Section */}
      <section className="pt-8 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Vision & mission
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We focus on making the best resource, for an excellent Growing
                media. We are specializing in a wide range of value-added coir
                products. Our dream is to support and cater globally to a
                sustainable day-to-day living with our eco-friendly products.
                Grow as the best sustainable agro supplier ensuring sufficient
                supply with high quality, having in mind, the protection of our
                environment and natural resources.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/ourvisionandmission.png"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength and Strategy */}
      <section className="pt-8 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Strength & Strategy
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                Our Strategy is to expand significantly all over the world
                through exceptional administration and outstanding in business
                performance and productivity. We are expertise in Quality
                product with timely delivery.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/ourstrength&strategy.png"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="pt-8 md:pt-14 pb-10 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-brown900 mb-4">
                Our Team
              </h2>
              <img
                src="/images/ourteam.png"
                alt="ourteamimage"
                className="object-cover rounded-lg mb-3 md:mb-10"
              />
            </div>
            <p className="text-[#333333] leading-relaxed md:text-xl">
              Over the past 40 years, our family had standard experience growing
              coconuts on our farms with immediate production farms to the
              growing medium. We are successful third-generation young
              entrepreneurs entirely focusing on long-term business. So as we
              started a new venture in the same industry to add more valuable
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact-us form */}
      <ContactUs />
    </>
  );
};

export default AboutUs;
