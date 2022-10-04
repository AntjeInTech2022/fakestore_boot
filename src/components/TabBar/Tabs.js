
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useNavigate } from 'react-router-dom';
import {useState } from 'react'
import { Button } from 'react-bootstrap';
//import WomenCat from '../../pages/WomenCategory';
//import MenCat from '../../pages/MenCategory';
//import JeweleryCat from '../../pages/JeweleryCategory';



function TabFun() {

  const [key, setKey] = useState(true);
  let navigate = useNavigate();

  return (
    <Tabs
      // defaultActiveKey="women"
      id="justify-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      
      <Tab eventKey="women" title="Women's clothing">
        <Button onClick={()=>navigate("/women")}>Show women's clothing only</Button>

      </Tab>
      
      <Tab eventKey="men" title="Men's clothing">
      <Button onClick={()=>navigate("/men")}>Show men's clothing only</Button>
      </Tab>
      <Tab eventKey="jewelery" title="Jewelery">
      <Button onClick={()=>navigate("/jewelery")}>Show jewerlery only</Button>
      </Tab>
    </Tabs>
    
  );
}

export default TabFun;