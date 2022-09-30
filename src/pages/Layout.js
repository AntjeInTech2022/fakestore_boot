import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
      <div>
        <Link to='/NavOffCanvas/></Link>
        <h1>Greatest selection of fake stuff</h1>
          <p>Fake it til you make it</p>
        <div className="container mb-3">
        <TabFun/> 
        </div>
        <Outlet />
      </div>
      
    );
  }
  
  export default Layout;
