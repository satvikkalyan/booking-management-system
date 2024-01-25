import "../list.css";
import Datatable from "../../../../components/admin-components/datatable/Datatable";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import {userColumns} from "../../../../components/utility/constants";
import {useEffect, useState} from "react";
import {getUsers} from "../../../../components/utility/fetchCalls";

const UserList = () => {

  const [users, setusers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      for(var x=0;x<data.length;x++){
        if (data[x]?.management)
        data[x]["userType"] = "Admin"
        else if(data[x]?.onSiteEmployee)
        data[x]["userType"] = "On Site Employee"
        else if(data[x]?.customerSupportTeam)
        data[x]["userType"] = "Customer Support Team"
        else if(data[x]?.customer)
        data[x]["userType"] = "Customer"
      }

      setusers(data);
    });

    return () => {};
  }, []);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable props={{ entity: "Users", cols: userColumns,data:users }} />
      </div>
    </div>
  );
};

export default UserList;
