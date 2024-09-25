import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Carousel */}
      <section className="slider-container overflow-hidden">
        <Slider {...settings}>
          <div className="bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
              <div className="container">
                <h3 className="text-brown900 font-extrabold text-6xl lg:text-7xl text-stroke-2-white mb-3">
                  JDS
                </h3>
                <p className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-stroke-2-brown900 text-white mb-7">
                  Best & high quality Coco Peat
                  <br /> Exporters From India
                </p>

                <Link to="/contactus">
                  <button className="bg-white px-6 py-2 rounded-full text-brown900 font-semibold text-xl md:text-2xl tracking-wide transition-all hover:transition-all hover:bg-gray-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/product-banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
              <div className="">
                <h3 className="text-brown900 font-extrabold text-6xl lg:text-7xl text-stroke-2-white mb-3">
                  JDS
                </h3>
                <p className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-stroke-2-brown900 text-white mb-7">
                  Best & high quality Coco Peat
                  <br /> Exporters From India
                </p>

                <Link to="/products">
                  <button className="bg-white px-6 py-2 rounded-full text-brown900 font-semibold text-xl md:text-2xl tracking-wide">
                    Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/aboutus-banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
              <div className="">
                <h3 className="text-brown900 font-extrabold text-6xl lg:text-7xl text-stroke-2-white mb-3">
                  JDS
                </h3>
                <p className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-stroke-2-brown900 text-white mb-7">
                  Best & high quality Coco Peat
                  <br /> Exporters From India
                </p>

                <Link to="/aboutus">
                  <button className="bg-white px-6 py-2 rounded-full text-brown900 font-semibold text-xl md:text-2xl tracking-wide">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Us */}
      <section className="-mt-2 py-14 bg-brown100">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex justify-center items-center text-brown900 mb-5 md:mb-8">
            <img
              className="w-8 md:h-11 h-8 md:w-11 mr-2"
              src="/icons/plant-svgrepo-com 2.png"
              alt="plant icon"
            />
            <h1 className="text-4xl md:text-5xl">About Us</h1>
            <img
              className="w-8 md:h-11 h-8 md:w-11 ml-2"
              src="/icons/plant-svgrepo-com 2.png"
              alt="plant icon"
            />
          </div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-0 justify-between items-center">
            <div className="flex flex-col justify-start order-2 lg:order-1 gap-y-4">
              <h2 className="text-[#333333] text-3xl font-bold leading-snug mt-4 lg:mt-0 lg:mb-2.5">
                Coco Products Supplier From India
              </h2>
              <p className="text-[#333333] text-justify leading-relaxed md:text-xl">
                A successful and renowned coco coir exporter and supplier from
                India, JDS specializes in premium quality Coco Products. We work
                continuously to explore and exhibit innovative collections in
                the industry. We also offer customized solutions to meet the
                unique needs of our clients. Choose JDS for all your Coco Coir
                needs and experience the difference in quality and service.
              </p>

              <div className="mt-5 flex justify-end">
                <Link to="/aboutus">
                  <button className="flex items-center text-white underline underline-offset-1 bg-[#c3986b] text-lg px-5 py-2 rounded-lg shadow-md hover:bg-[#a97e53] transition">
                    See More
                    <img
                      className="ml-0.5 h-6 w-6 -mr-2"
                      src="/icons/Right2.svg"
                      alt="Arrow icon"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end  items-center order-1 lg:order-2">
              <img src="/images/Aboutus.png" alt="about us" />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-row justify-center items-center text-brown900 mx-auto mb-5 md:mb-8">
            <img
              className="w-8 md:h-11 h-8 md:w-11 mr-2"
              src="/icons/plant-svgrepo-com 2.png"
              alt="plant icon"
            />
            <h1 className="text-4xl md:text-5xl">What We Do?</h1>
            <img
              className="w-8 md:h-11 h-8 md:w-11 ml-2"
              src="/icons/plant-svgrepo-com 2.png"
              alt="plant icon"
            />
          </div>

          <div className="mt-10 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-10 items-center">
            <div className="flex justify-center lg:justify-start items-center">
              <img src="/images/whatwedo.png" alt="what we do" />
            </div>

            <div className="flex flex-col justify-center lg:justify-end py-4 gap-x-4">
              <p className="text-[#333333] text-justify leading-relaxed md:text-xl">
                JDS is a trusted partner in the world of Coco Peat. As the
                leading exporter, manufacturer, and supplier of Coco Peat, we
                take pride in delivering top-quality, eco-friendly products. We
                are committed to sustainability and customer satisfaction, and
                offer a wide range of Coco Peat solutions for horticultural and
                agricultural needs.
              </p>

              <div className="mt-5 flex justify-end">
                <Link to="/">
                  <button className="flex items-center text-white underline underline-offset-1 bg-[#c3986b] text-lg px-5 py-3 rounded-lg shadow-md hover:bg-[#a97e53] transition">
                    Explore More
                    <img
                      className="ml-0.5 h-6 w-6 -mr-2"
                      src="/icons/Right2.svg"
                      alt="Arrow icon"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Should you */}
      <section className="py-14 bg-brown100">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="mx-auto grid grid-cols-1">
            <div className="flex justify-center items-center text-brown900 mb-5 md:mb-8">
              <img
                className="w-8 md:h-11 h-8 md:w-11 mr-2"
                src="/icons/plant-svgrepo-com 2.png"
                alt="plant icon"
              />
              <h1 className="text-center text-4xl md:text-5xl">
                Why should you choose JDS
              </h1>
              <img
                className="w-8 md:h-11 h-8 md:w-11 ml-2"
                src="/icons/plant-svgrepo-com 2.png"
                alt="plant icon"
              />
            </div>
            <p className="md:text-xl text-justify text-[#333333]  mb-8 lg:mx-16">
              Agriculture was a family business not too long ago. Nowadays,
              automation, scientific advances, and better transportation have
              allowed for industrialization. With strategic distribution and a
              team of agricultural experts, we provide comprehensive support to
              enhance crop productivity. Join us in shaping the future of
              agriculture with SPM Substrates and experience the benefits of
              advanced technology and continuous farming practices.
            </p>

            <div className="bg-brown500 font-bold py-8 rounded-xl">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6  text-center">
                {/* Best Quality */}
                <div className="flex flex-col items-center ">
                  <img
                    src="/images/bestquality.png"
                    alt="Best Quality"
                    className="w-22 h-22"
                  />

                  <p className="text-black md:text-sm lg:text-xl">
                    Best Quality
                  </p>
                </div>

                {/* Competitive Pricing */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/CompetitivePricing.png"
                    alt="Competitive Pricing"
                    className="w-23 h-23"
                  />

                  <p className="text-black md:text-sm lg:text-xl">
                    Competitive Pricing
                  </p>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/callsupport.png"
                    alt="24/7 Support"
                    className="w-22 h-22"
                  />

                  <p className="text-black md:text-sm lg:text-xl">
                    24/7 Call Support
                  </p>
                </div>

                {/* Eco-friendly */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/eco-friendly.png"
                    alt="Eco Friendly"
                    className="w-22 h-22"
                  />

                  <p className="text-black md:text-sm lg:text-xl">
                    Eco-friendly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On Product */}
      <section className="py-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="flex justify-center items-center text-brown900 mb-5 md:mb-8">
              <img
                className="w-8 md:h-11 h-8 md:w-11 mr-2"
                src="/icons/plant-svgrepo-com 2.png"
                alt="plant icon"
              />
              <h1 className="text-4xl text-center md:text-5xl">Our Products</h1>
              <img
                className="w-8 md:h-11 h-8 md:w-11 ml-2"
                src="/icons/plant-svgrepo-com 2.png"
                alt="plant icon"
              />
            </div>
            <p className="md:text-xl text-justify text-[#333333]  mb-10">
              JDS is a best Coco Coir exporter in India, is dedicated to
              providing high-quality Coir products that meet international
              standards. Choose JDS as your trusted source for top-tier coco
              coir products that elevate your agricultural practices while
              preserving the environment. Our range of products include
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-10">
              <div className="bg-brown100 px-7 py-10 md:p-10 rounded-xl border-2 border-brown900">
                <img
                  src="/images/cocopithblock.png"
                  alt="Coco Pith Blocks"
                  className="mx-auto mb-7"
                />
                <h3 className="text-4xl text-center font-semibold mb-4">
                  Coco Pith Blocks
                </h3>
                <p className="text-[#333333] text-justify text-lg">
                  &quot;Coco Pith Blocks, also known as Coco Coir, are an
                  excellent growing medium made from the fibrous husk of
                  coconuts. Ideal for soil conditioning, it retains moisture
                  while providing excellent aeration, making it perfect for
                  hydroponic systems, nurseries, and home gardening.&quot;
                </p>
                <div className="text-right mt-2">
                  <Link to="/products" className="text-black-500 underline">
                    More Details
                  </Link>
                </div>
              </div>
              <div className="bg-brown100  px-7 py-10 md:p-10 rounded-xl border-2 border-brown900">
                <img
                  src="/images/cococoirdisc.png"
                  alt="Coco Coir Disc"
                  className="mx-auto mb-7"
                />
                <h3 className="text-4xl text-center font-semibold mb-4">
                  Coco Coir Disc
                </h3>
                <p className="text-[#333333] text-justify text-lg">
                  Coco Pith Blocks, also known as Coco Coir, are an excellent
                  growing medium made from the fibrous husk of coconuts. Ideal
                  for soil conditioning, it retains moisture while providing
                  excellent aeration, making it perfect for hydroponic systems,
                  nurseries, and home gardening.
                </p>
                <div className="text-right mt-2">
                  <Link to="/products" className="text-black-500 underline">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to="/products">
                <button className="flex items-center text-white underline underline-offset-1 bg-[#c3986b] text-lg px-5 py-3 rounded-lg shadow-md hover:bg-[#a97e53] transition">
                  See More
                  <img
                    className="ml-0.5 h-6 w-6 -mr-2"
                    src="/icons/Right2.svg"
                    alt="Arrow icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <ContactUs />
    </div>
  );
};

export default Home;
