import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import ProductImageSlider from "../components/ProductImagSlider";

const Products = () => {
  return (
    <>
      {/* Image Section */}
      <div className="bg-[url('/images/product-banner.png')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="bg-black min-h-screen bg-opacity-20 flex items-center justify-center">
          <h1 className=" text-white text-5xl md:text-6xl font-semibold text-center">
            Our Products
          </h1>
        </div>
      </div>

      {/*What we provide*/}
      <section className="pt-14  bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 gap-4 ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-brown800 mb-4 text-center">
                What we Provide
              </h2>
              <h2 className="text-3xl font-semibold text-[#000000] mb-4">
                Premium Coco Products for Sustainable Growth
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We specialize in manufacturing and exporting high-quality coco
                pith blocks, coco chips, and grow bags. Our products are
                designed to support sustainable and efficient horticulture
                practices, ensuring better growth and healthier plants. Whether
                you&apos;re a professional grower or a gardening enthusiast, our
                coco products are the perfect solution for all your planting
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Products Display 1*/}
      <section className="pt-10 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 justify-between relative">
            <div className="absolute top-9 bg-brown500 text-brown900 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-full">
              1
            </div>

            <ProductImageSlider
              name="cocopithblock"
              main="/cocopithblock.png"
              firstname="cocopithblock1"
              first="/cocopithblock1.png"
              secondname="cocopithblock2"
              second="/cocopithblock2.png"
              thirdname="cocopithblock3"
              third="/cocopithblock3.png"
            />

            <div className="flex flex-col justify-start items-start">
              <h1 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                Coco Pith Blocks
              </h1>
              <p className="text-base text-[#333333] mb-6">
                "Coco pith blocks, also known as coco coir, are an excellent
                growing medium made from the fibrous husk of coconuts. Ideal for
                soil conditioning, it retains moisture while providing excellent
                aeration, making it perfect for hydroponic systems, nurseries,
                and home gardening."
              </p>

              <div className="flex flex-col space-y-6">
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="icons/Productsize.svg.svg"
                    alt="Size Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20">
                    Size
                  </span>
                  <span className=" font-semibold  text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    30 x 30 x 12 cm (+ or - 3 cm)
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productweight.svg.svg"
                    alt="Weight Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-6 md:mr-12">
                    Weight
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    4 to 5.5 kgs
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productph.svg.svg"
                    alt="pH Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    Ph Level
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    5.5 to 6.5
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productmoisture.svg.svg"
                    alt="Moisture Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-4 md:mr-8">
                    Moisture
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    Less than 18%
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productload.svg.svg"
                    alt="Load Ability Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-2 lg:mr-2">
                    Load Ability
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    25 tons per Pallets
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productec.svg.svg"
                    alt="EC Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7  mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20 pr-3">
                    EC
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">{`< 0.5ms / cm on 1:1.5 ratio`}</span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productexpansion.svg"
                    alt="Expansion Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5">
                    Expansion
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    15 to 18 Lts
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productseive.svg"
                    alt="Sieve Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4 "
                  />
                  <span className="font-semibold text-lg text-black mr-16">
                    Sieve
                  </span>
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    6mm, 8mm, 10mm, 12mm Mesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Products Display 2*/}
      <section className="pt-8 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 py-8 justify-between relative">
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                Coco Coir Disc
              </h1>
              <p className="text-base text-[#333333] mb-6">
                "Coco pith blocks, also known as coco coir, are an excellent
                growing medium made from the fibrous husk of coconuts. Ideal for
                soil conditioning, it retains moisture while providing excellent
                aeration, making it perfect for hydroponic systems, nurseries,
                and home gardening."
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="icons/Productsize.svg.svg"
                    alt="Size Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20">
                    Size
                  </span>
                  <span className=" font-semibold  text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    Dia 10 x 1.6 cm
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productweight.svg.svg"
                    alt="Weight Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-6 md:mr-12">
                    Weight
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    95 to 110 gms
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productph.svg.svg"
                    alt="pH Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    Ph Level
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    6 to 7.5
                  </span>
                </div>

                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productec.svg.svg"
                    alt="EC Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7  mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20 pr-3">
                    EC
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">{`< 0.5ms / cm in 1:3 Dilution`}</span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productexpansion.svg"
                    alt="Expansion Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5">
                    Expansion
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    1 Lts
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productseive.svg"
                    alt="Sieve Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4 "
                  />
                  <span className="font-semibold text-lg text-black mr-2">
                    Particle Size
                  </span>
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    1 to 4 mm
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="absolute top-9 right-0  bg-brown500 text-brown900 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-full">
                2
              </div>
              <ProductImageSlider
                name="cococoirdisc"
                main="/cococoirdisc.png"
                firstname="cococoirdisc1"
                first="/cococoirdisc1.png"
                secondname="cococoirdisc2"
                second="/cococoirdisc2.png"
                thirdname="cococoirdisc3"
                third="/cococoirdisc3.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Products Display 3*/}
      <section className="pt-10 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 justify-between relative">
            <div className="absolute   bg-brown500 text-brown900 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-full">
              3
            </div>

            <ProductImageSlider
              name="coconuthusk"
              main="/coconuthusk.png"
              firstname="coconuthusk1"
              first="/coconuthusk1.png"
              secondname="coconuthusk2"
              second="/coconuthusk2.png"
              thirdname="coconuthusk3"
              third="/coconuthusk3.png"
            />

            <div className="flex flex-col justify-start items-start">
              <h1 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                Coconut Husk chips blocks
              </h1>
              <p className="text-base text-[#333333] mb-6">
                "Coco chips are also used as a mulching agent as well as a soil
                conditioner. Our coir chips are used as mulching material in
                gardens. It is a natural and renewable substitute for pine bark.
                A garden where coir is applied doesn't only look beautiful but
                on top of that is better for plants and trees because of its
                property to retain high amounts of water and to release it there
                where necessary."
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="icons/Productsize.svg.svg"
                    alt="Size Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20">
                    Size
                  </span>
                  <span className=" font-semibold  text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    30 x 30 x 15 cm
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productweight.svg.svg"
                    alt="Weight Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-6 md:mr-12">
                    Weight
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    5 kg
                  </span>
                </div>
                {/* <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productph.svg.svg"
                    alt="pH Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    Ph Level
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    5.5 to 6.5
                  </span>
                </div> */}
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productmoisture.svg.svg"
                    alt="Moisture Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-4 md:mr-8">
                    Moisture
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    18% - 20%
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productload.svg.svg"
                    alt="Load Ability Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-2 lg:mr-9">
                    Formula
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    {/* 25 tons per 1x40 IIC(20 Pallets) */}
                    100% Husk Chips
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productec.svg.svg"
                    alt="EC Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7  mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20 pr-3">
                    EC
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    Different Levels Possible
                  </span>
                </div>
                {/* <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productexpansion.svg"
                    alt="Expansion Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5">
                    Expansion
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    7.5 to 8.5 Lts
                  </span>
                </div> */}
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productseive.svg"
                    alt="Sieve Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4 "
                  />
                  <span className="font-semibold text-lg text-black mr-2">
                    200 Blocks x
                  </span>
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    20 Pallets Per 40 Ft. Container
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Products Display 4*/}
      <section className="pt-8 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 py-8 justify-between relative">
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                650 GRAMS PEAT
              </h1>
              <p className="text-base text-[#333333] text-justify mb-6">
                "The 650 Grams Coco Peat Briquettes are manufactured based on
                the purpose of usage.Coco Peat Briquettes for application where
                excellent propagation,water soil aeration and seed germination
                is required.Coco can be used in potting and planter application
                regular watering is not required"
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="icons/Productsize.svg.svg"
                    alt="Size Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20">
                    Size
                  </span>
                  <span className=" font-semibold  text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    20 x 20 x 5+ / -1cm
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productph.svg.svg"
                    alt="pH Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    Ph Level
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    5.5 to 6.8
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productec.svg.svg"
                    alt="EC Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7  mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20 pr-3">
                    EC
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    BELOW 0.5 ms/cm
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productexpansion.svg"
                    alt="Expansion Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5">
                    Expansion
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    15 Litres Per KG
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productseive.svg"
                    alt="Sieve Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4 "
                  />
                  <span className="font-semibold text-lg text-black mr-16">
                    Fiber
                  </span>
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    3 %
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="absolute top-9 right-0  bg-brown500 text-brown900 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-full">
                4
              </div>
              <ProductImageSlider
                name="650product"
                main="/650product1.png"
                firstname="650product1"
                first="/650product1.png"
                secondname="650product2"
                second="/650product2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Products Display 5*/}
      <section className="pt-10 md:pt-14 bg-brown50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 gap-4 py-8 justify-between relative">
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                Grow Bags
              </h1>
              <p className="text-base text-[#333333] lg:mt-3 mb-6">
                "Grows bags are premium products used to grow a huge variety of
                fruit and vegetables, as well as a great variety of seasonal and
                non-seasonal flowers which have long greenhouse bench life. We
                manufacture our Coir pith Grow bags by blending coir pith with
                appropriate quantity of short coir fiber, compressing it and
                packing it loosely in Polythene bag. The bags are white outside
                and black inside to protect the root system from peat moss or
                rock wool slabs, our grow bags find use in agriculture in a
                variety of ways. Besides being used as a popular growing medium
                for domestic gardens, these ready-to-use bags are widely used in
                commercial hydroponic green houses and farms for growing many
                kinds of vegetables and fruit like strawberries, cucumber and
                tomatoes. Easy to transport, handle and store, these bags are a
                100 percent organic, and the user has to just make suitable
                holes on them for planting, as well drainage."
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="icons/Productsize.svg.svg"
                    alt="Size Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20">
                    Size
                  </span>
                  <span className=" font-semibold  text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    100 x 18 x 16 cm (Expanded)
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productweight.svg.svg"
                    alt="Weight Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-6 md:mr-12">
                    Weight
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    2.8 to 3.2 kg
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productph.svg.svg"
                    alt="pH Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    Ph Level
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    5.5 to 6.5
                  </span>
                </div>
                {/* <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productmoisture.svg.svg"
                    alt="Moisture Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-4 md:mr-8">
                    Moisture
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    Less than 18%
                  </span>
                </div> */}
                {/* <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productload.svg.svg"
                    alt="Load Ability Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-2 lg:mr-2">
                    Load Ability
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    25 tons per 1x40 IIC(20 Pallets)
                  </span>
                </div> */}
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productec.svg.svg"
                    alt="EC Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7  mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5 md:mr-20 pr-3">
                    EC
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">{`< 0.5ms / cm in 1:1.5 ratio`}</span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productexpansion.svg"
                    alt="Expansion Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4"
                  />
                  <span className="font-semibold text-lg text-black mr-5">
                    Expansion
                  </span>
                  <span className=" font-semibold text-lg text-black md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    -
                  </span>
                </div>
                <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row">
                  <img
                    src="/icons/Productseive.svg"
                    alt="Sieve Icon"
                    className="sm:w-7 w-6 h-6 sm:h-7 mr-4 "
                  />
                  <span className="font-semibold text-lg text-black mr-2">
                    Particle Size
                  </span>
                  <span className="font-semibold text-lg text-black mr-5 md:mr-10">
                    :
                  </span>
                  <span className="ml-10 sm:ml-0 text-brown700 font-bold sm:text-lg">
                    40 ft Container can be loaded with Bags
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="absolute top-5 right-0 bg-brown500 text-brown900 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-full">
                5
              </div>
            </div>
          </div>
        </div>

        {/*Why Choose Us*/}
        <section className="bg-brown100 mt-20 mb-14">
          <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 gap-4 py-8">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-brown800 mb-4 text-center">
                  Why Choose Us?
                </h1>
                <p className="text-[#333333] text-center leading-relaxed md:text-xl">
                  At{" "}
                  <span className="text-black font-bold ">
                    JDS INTERNATIONAL EXPORTS
                  </span>
                  , we are committed to providing eco-friendly, high-quality
                  coco products that promote sustainable gardening and
                  agriculture. Our products are carefully crafted to meet the
                  highest standards of quality, ensuring that you get the best
                  results for your plants.
                </p>
                <div className="mt-7">
                  <Link to="/contactus">
                    <button className="px-5 py-2.5 rounded-lg text-white bg-brown600 font-semibold transition-all hover:transition-all hover:bg-brown700 shadow-2xl">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Contact us form */}
      <ContactUs />
    </>
  );
};

export default Products;
