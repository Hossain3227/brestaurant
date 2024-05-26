import Foodcard from "../components/foodcard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Ordertab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="">
      {/* {items.map((item) => (
        <Foodcard key={item._id} item={item}></Foodcard>
      ))} */}

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {items.map((item) => (
              <Foodcard key={item._id} item={item}></Foodcard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ordertab;
