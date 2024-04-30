import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'Swiper/swiper-bundle.css';

const Banner = () => {
    return (
        <div className='h-[300px] md:h-[450px]  my-10 rounded-2xl '>
         
                <Swiper
                 modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 5000 }}
                    style={{ height: "100%" }} // Ensure Swiper takes up 100% height of its container
                    className='rounded-2xl'
                >
                   
                    <SwiperSlide className='rounded-2xl'>
                    <div className="relative text-center rounded-2xl ">
                    <div className="h-[300px] md:h-[450px] relative rounded-2xl">
                        {/* Background image */}
                        <div className="absolute inset-0 bg-cover object-contain bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/02RM2s4/datingscout-k-Ki-Py2-M4-CLM-unsplash.jpg')` }}></div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40  rounded-2xl "></div>

                        {/* Text */}
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
                           <h1 className="text-center">Indulge in the culinary delights of Italy, from creamy gelato in Florence <br /> to piping-hot pizzas in Naples, each bite a <br /> journey through centuries of gastronomic tradition</h1>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative text-center rounded-2xl">
                    <div className="h-[300px] md:h-[450px]  relative rounded-2xl">
                        {/* Background image */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/ftp76zW/marcos-llerena-Xz-P1-Ti5-Ii7-I-unsplash.jpg')` }}></div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40  rounded-2xl"></div>

                        {/* Text */}
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
                            <h1 className="text-center">Experience the irresistible allure of Italian cuisine, where every meal is a symphony of <br /> flavors and aromas that captivate the senses. From the bustling streets of Rome to the <br /> charming trattorias of Venice, Italy offers a gastronomic adventure like no other</h1>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative text-center">
                    <div className="h-[300px] md:h-[450px]  relative rounded-2xl">
                        {/* Background image */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/4281qg0/nikolett-emmert-0k-Src-V46c-I4-unsplash.jpg')` }}></div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40  rounded-2xl"></div>

                        {/* Text */}
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
                            <h1 className="text-center">Embark on a culinary journey through Italy, where every dish tells a story of tradition, <br />flavor, and passion. From the creamy gelato of Florence to the piping-hot pizzas of Naples, <br /> each bite is a delightful exploration of Italy's rich gastronomic history. </h1>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                


                    {/* <SwiperSlide>
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

                    </SwiperSlide> */}
                    
               
                   
                    {/* Add more slides as needed */}
                </Swiper>
          
        </div>
    );
};

export default Banner;
