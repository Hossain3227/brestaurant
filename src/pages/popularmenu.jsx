import { useEffect, useState } from "react";
import SectionTitle from "../components/sectionTitle";
import Menuitem from "../shared/menuitem";
import UseMenu from "../hooks/useMenu";


const Popularmenu = () => {
    // const [menu, setmenu] = useState([]);
    // useEffect( () => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category ==='popular');
    //         setmenu(popularItems)})
    // },[])
    const [menu] = UseMenu();
    const popular = menu.filter(item=> item.category === 'popular');


    
    return (
        <div className="mb-12">
            <SectionTitle heading='form Our Menu' subheading='popular item'></SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                popular.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
            }
         </div>
            <div className="text-center my-4">
            <button className="btn btn-outline  border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
         
        
        
        </div>
    );
};

export default Popularmenu;