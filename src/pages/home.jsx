
import { Helmet } from "react-helmet-async";
import Featured from "../components/featured";
import Banner from "./banner";
import Category from "./category";
import Popularmenu from "./popularmenu";
import Testimonials from "./testimonials";


const Home = () => {
    

    return (
        <div>
            <Helmet>
            <title>Bristro | Home</title>
            
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;