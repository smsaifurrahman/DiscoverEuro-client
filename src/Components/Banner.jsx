import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'Swiper/swiper-bundle.css';

const Banner = () => {
    return (
        <div className='md:h-[400px] lg:md:h-[400px]  my-10'>
         
                <Swiper
                 modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000 }}
                    style={{ height: "100%" }} // Ensure Swiper takes up 100% height of its container
                >
                   
                    <SwiperSlide>
                    <div className='relative h-full text-center '>
                        <img className='inset-0 w-full h-full object-cover rounded-2xl' src='https://i.ibb.co/XW6m1bW/alice-e6fh-Eghz-FJU-unsplash.jpg' alt="" />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-30 text-white top-1/3 font-bold md:text-xl px-4 py-2">
                            <h1>Indulge in the culinary delights of Italy, from creamy gelato in Florence <br /> to piping-hot pizzas in Naples, each bite a <br /> journey through centuries of gastronomic tradition</h1>
                        </div>
                    </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='relative h-full text-center '>
                        <img className='inset-0 opacity-90 w-full h-full object-cover rounded-2xl' src='https://i.ibb.co/92gBfST/martijn-vonk-2-Zbc-Myr-On-RM-unsplash.jpg' alt="" />
                        <div className="absolute bottom-0 left-0 right-0   top-1/3 font-bold md:text-xl px-4 py-2">
                            <h1>Indulge in the culinary delights of Italy, from creamy gelato in Florence <br /> to piping-hot pizzas in Naples, each bite a <br /> journey through centuries of gastronomic tradition</h1>
                        </div>
                    </div>

                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className='relative h-full text-center '>
                        <img className='inset-0 w-full h-full object-cover rounded-2xl' src='https://i.ibb.co/92gBfST/martijn-vonk-2-Zbc-Myr-On-RM-unsplash.jpg' alt="" />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-30 text-white top-1/3 font-bold md:text-xl px-4 py-2">
                            <h1>Indulge in the culinary delights of Italy, from creamy gelato in Florence <br /> to piping-hot pizzas in Naples, each bite a <br /> journey through centuries of gastronomic tradition</h1>
                        </div>
                    </div>

                    </SwiperSlide>
                    
               
                   
                    {/* Add more slides as needed */}
                </Swiper>
          
        </div>
    );
};

export default Banner;
