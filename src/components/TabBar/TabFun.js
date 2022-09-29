import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function TabFun() {
  return (
    <Tabs
      defaultActiveKey="women"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="women" title="Women's clothing">
       
      </Tab>
      <Tab eventKey="profile" title="Men's clothing">
      
      </Tab>
      <Tab eventKey="longer-tab" title="Jewelery">
       
      </Tab>
      <Tab eventKey="contact" title="Electronics">
       
      </Tab>
    </Tabs>
  );
}

export default TabFun;