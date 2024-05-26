import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover";
import menuimg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import Popularmenu from '../pages/popularmenu'
import UseMenu from "../hooks/useMenu";
import SectionTitle from "../components/sectionTitle";
import Menucategory from "./menucategory";

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    
    return (
        <div>
            <Helmet>
            <title>Bristro | menu</title>
            
            </Helmet>
            <Cover img ={menuimg} title='our menu'></Cover>
            <SectionTitle subheading="don't miss today's offer" heading="Today's Offer"></SectionTitle>
            <Menucategory items={offered}></Menucategory>


            <Menucategory items={dessert} title="dessert" img={dessertImg}></Menucategory>
            <Menucategory items={pizza} title="pizza" img={pizzaImg}></Menucategory>
            <Menucategory items={salad} title="salad" img={saladImg}></Menucategory>
            <Menucategory items={soup} title="soup" img={soupImg}></Menucategory>
        </div>
    );
};

export default Menu;