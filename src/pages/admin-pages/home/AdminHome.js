import Sidebar from "./../../../components/admin-components/sidebar/Sidebar";
import "./AdminHome.css";
import Widget from "./../../../components/admin-components/widget/Widget";
const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>

      </div>
    </div> 
  );
};

export default AdminHome;
