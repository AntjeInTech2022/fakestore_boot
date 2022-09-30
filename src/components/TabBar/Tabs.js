
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-bootstrap';
import WomenCat from '../../pages/WomenCategory';
import MenCat from '../../pages/MenCategory';
import JeweleryCat from '../../pages/JeweleryCategory';


function TabFun() {
  return (
    <Tabs
      // defaultActiveKey="women"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      
      <Tab eventKey="women" title="Women's clothing">
        <NavLink to='/women' className='nav-link'>
          <WomenCat/>
        </NavLink>
      </Tab>
      <Tab  eventKey="men" title="Men's clothing">
      <NavLink to='/men' className='nav-link'>
          <MenCat/>
        </NavLink>
      </Tab>
      <Tab eventKey="jewelery" title="Jewelery">
      <NavLink to='/jewelery' className='nav-link'>
          <JeweleryCat/>
        </NavLink>
      </Tab>
    </Tabs>
    
  );
}

export default TabFun;