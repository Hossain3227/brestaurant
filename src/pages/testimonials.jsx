import SectionTitle from "../components/sectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    
    const [reviews, setreviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    },[])

    return (
        <div className="my-20">
                 <SectionTitle subheading='what our client say' heading='Testimonials'></SectionTitle>

                   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>     
        </div>
    );
};

export default Testimonials;