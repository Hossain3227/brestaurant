import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTitle from '../components/sectionTitle'


const Category = () => {
    return (
        <div>
          <SectionTitle subheading={'from 11.00am to 10.00pm'} heading={'Order online'}>

            
          </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-4xl text-center text-white -mt-12'>salads</h3> </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl text-center text-white -mt-12'>pizzas</h3> </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-4xl text-center text-white -mt-12'>soup</h3> </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-4xl text-center text-white -mt-12'>deserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Category;