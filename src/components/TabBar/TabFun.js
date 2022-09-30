import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link} from 'react-router-dom';

function TabFun() {
  return (
    <Tabs
      defaultActiveKey="women"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      
      <Tab eventKey="women" title="Women's clothing">
      {/* <Link to='/women'></Link> */}
      </Tab>
      <Tab  eventKey="men" title="Men's clothing">
      <Link to='/men'></Link>
      </Tab>
      <Tab eventKey="jewelery" title="Jewelery">
      <Link to='/jewelery'></Link>
      </Tab>
    </Tabs>
    
  );
}

export default TabFun;