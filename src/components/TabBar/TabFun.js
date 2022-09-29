import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Sonnet from '../../components/Sonnet';

function TabFun() {
  return (
    <Tabs
      defaultActiveKey="women"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="women" title="Women's clothing">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="Men's clothing">
        <Sonnet />
      </Tab>
      <Tab eventKey="longer-tab" title="Jewelery">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Electronics" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
  );
}

export default TabFun;