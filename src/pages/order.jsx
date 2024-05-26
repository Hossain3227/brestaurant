import { useState } from "react";
import orderCover from "../assets/shop/banner2.jpg";
import Cover from "../shared/cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../hooks/useMenu";
import Foodcard from "../components/foodcard";
import Ordertab from "./ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories = ['salad', 'pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [menu] = UseMenu();
    const [tabIndex,settabIndex] = useState(initialIndex)
    
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const drinks = menu.filter(item=> item.category === 'drinks');
   
    return (
    <div>
      <Helmet>
            <title>Bristro | Order Food</title>
            
            </Helmet>
      <Cover img={orderCover} title="order food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
            <Ordertab items={salad}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={dessert}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={drinks}></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
