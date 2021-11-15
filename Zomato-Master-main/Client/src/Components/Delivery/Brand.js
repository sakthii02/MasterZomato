import React from "react";
import Slider from "react-slick";

// components

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const Brand = (props) => {  
  const logos = [
    "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    "https://b.zmtcdn.com/data/dish_images/4f2d979fcb3d1ac70db57b555d112b331634721216.png",
    "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
    "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    "https://b.zmtcdn.com/data/dish_images/d72e1fdf0588a089e0cb2653427ccae71634401609.png",
    "https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png",
    "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png"
  ];
  const settings = {
    arrows: true,
    infinite: false,  
    speed: 300,
    slidesToShow: 3,  
    slidesToScroll: 1,
    nextArrow: (
        <div>
          <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
            <BiChevronRight/>
          </div>
        </div>
      ),  
      prevArrow: (
        <div>
          <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-full  absolute'>
            <BiChevronLeft/>
          </div>
        </div>
      ),
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:5,
          nextArrow: (
            <div>
              <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronRight/>
              </div>
            </div>
          ),  
          prevArrow: (
            <div>
              <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronLeft/>
              </div>
            </div>
          )
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:2,
          nextArrow: (
            <div>
              <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronRight/>
              </div>
            </div>
          ),  
          prevArrow: (
            <div>
              <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronLeft/>
              </div>
            </div>
          )
        }
      },
      {
        breakpoint:480,  
        settings:{  
          slidesToShow:2,
          nextArrow: (
            <div>
              <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronRight/>
              </div>
            </div>
          ),  
          prevArrow: (
            <div>
              <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-full  absolute'>
                <BiChevronLeft/>
              </div>
            </div>
          )
        }

      }
    ]
  };
  return (
    <div className="my-16 lg:mt-20 mt-8 p-4 ">

        <h3  className="text-3xl pt-5 text-light py-2 px-4"> Food Items </h3> 

      <Slider {...settings}>
        {logos.map((logo) => (
          
          

          <div className="w-1/2 h-1/2 lg:px-5 pt-8 flex items-center bg-white shadow justify-center">
         
            <img
              src={logo}
              alt="brand"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;