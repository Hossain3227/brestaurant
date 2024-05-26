import SectionTitle from "./sectionTitle";
import featureimg from '../assets/home/featured.jpg'
import './featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading='Check it out' subheading='Featured items'></SectionTitle>
         <div className="md:flex  justify-center items-center pt-12 pb-20 px-36 bg-slate-500 bg-opacity-30">
            <div>
                <img src={featureimg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p className=""> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi suscipit cumque doloribus corporis magni eligendi, vitae eveniet sint aliquam voluptatum beatae molestiae odit quaerat in a ipsa nihil harum, consequuntur eaque iusto? Enim quae maiores aperiam quis veritatis cum rem exercitationem labore itaque! Culpa amet reiciendis ab debitis ipsa ea. </p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
         </div>
        
        </div>
        
    );
};

export default Featured;