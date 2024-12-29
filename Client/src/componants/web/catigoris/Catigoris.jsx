import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Catigoris.css'

import './Catigoris.css'
import { Link } from 'react-router-dom';

export default function Catigoris() {
  const getCatigoris = async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=8`)
    return data;
  }
  
  const {data,isLoading}=useQuery('web_categorise',getCatigoris)

  if(isLoading){
    return <p>...Loading</p>
  }

  return (
    <div className='container'>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={4.5}
      loop={true}
      autoplay={{
        delay: 3000
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-swiper" // Add a class name to the Swiper container
    >
      {data?.categories.length ? data?.categories.map((category)=>
      <SwiperSlide key={category._id}>
        <Link to={`/products/category/${category._id}`}>
        <div className="category">
        <img className='sImg' src={category.image.secure_url}/>
        {//<h2 className='fs-5'>{category.name}</h2>
         }
        </div>
        </Link>
        
      </SwiperSlide>
      ):'no category found'
    }
    </Swiper>

    </div>
   
  );



  // return (
  //   <div className="container">
  //     <div className="row">
  //       {data?.categories.length ? data?.categories.map((category)=>
  //       <div  key={category._id}>
  //         <img  src={category.image.secure_url}/>
  //         <h2>{category.name}</h2>

  //       </div>
  //       ):'no category found'}
  //     </div>
  //   </div>
  // )
};
