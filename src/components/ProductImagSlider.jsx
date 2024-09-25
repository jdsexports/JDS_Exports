import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import PropTypes from "prop-types";

const baseUrl = "/images";

const ProductImageSlider = ({
  name,
  first,
  second,
  third,
  firstname,
  secondname,
  thirdname,
  main,
}) => {
  const [mainImage, setMainImage] = useState(baseUrl + main);
  const [selectedImage, setSelectedImage] = useState(baseUrl + main);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${baseUrl}/${name}${i + 1}.png`} />
        </a>
      );
    },
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
  };

  const handleImageClick = (image) => {
    setMainImage(image);
    setSelectedImage(image);
  };
  return (
    <div className="mt-14 grid justify-center items-center mb-10">
      <div>
        <img
          src={mainImage}
          alt="main cocopithblock"
          className="w-72 h-72 object-contain"
        />
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {/* Thumbnail Images in the slider */}
          <div className="flex justify-center items-center rounded-lg outline-none pr-2">
            {first && (
              <img
                src={baseUrl + first}
                alt={firstname}
                className={`p-1 rounded-lg hover:cursor-pointer shadow-xl ${
                  selectedImage === baseUrl + first
                    ? "border-2 border-brown500 rounded-lg"
                    : ""
                }`}
                onClick={() => handleImageClick(baseUrl + first)}
              />
            )}
          </div>
          <div className="flex justify-center items-center rounded-lg outline-none pr-2">
            {second && (
              <img
                src={baseUrl + second}
                alt={secondname}
                className={`p-1 rounded-lg hover:cursor-pointer shadow-xl ${
                  selectedImage === baseUrl + second
                    ? "border-2 border-brown500 rounded-lg"
                    : ""
                }`}
                onClick={() => handleImageClick(baseUrl + second)}
              />
            )}
          </div>
          <div className="flex justify-center items-center rounded-lg outline-none pr-2">
            {third && (
              <img
                src={baseUrl + third}
                alt={thirdname}
                className={`p-1 rounded-lg hover:cursor-pointer shadow-xl ${
                  selectedImage === baseUrl + third
                    ? "border-2 border-brown500 rounded-lg"
                    : ""
                }`}
                onClick={() => handleImageClick(baseUrl + third)}
              />
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
};

ProductImageSlider.propTypes = {
  name: PropTypes.string,
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  firstname: PropTypes.string,
  secondname: PropTypes.string,
  thirdname: PropTypes.string,
  main: PropTypes.string,
};
export default ProductImageSlider;
