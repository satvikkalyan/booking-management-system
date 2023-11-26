import Sidebar from "./../../../components/admin-components/sidebar/Sidebar";
import "./admin-home.css";
import Widget from "./../../../components/admin-components/widget/Widget";
import Featured from "./../../../components/admin-components/featured/Featured";
import Chart from "./../../../components/admin-components/chart/Chart";
import Table from "./../../../components/admin-components/table/Table";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <table>
          <tbody>
            <tr>
              {/* <td>
                <div>
                  <Featured />
                </div>
              </td> */}
              <td>
                <div className="td-div-chart">
                  <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="listContainer">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
