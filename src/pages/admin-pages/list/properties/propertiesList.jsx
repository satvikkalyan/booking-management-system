import "./../list.css";
import Datatable from "../../../../components/admin-components/datatable/Datatable";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import {propertiesColumns} from "../../../../components/utility/constants";
import {useEffect, useState} from "react";
import {getProperties} from "../../../../components/utility/fetchCalls";

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });

    return () => {};
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable
          props={{
            entity: "Properties",
            cols: propertiesColumns,
            data: properties,
          }}
        />
      </div>
    </div>
  );
};

export default PropertiesList;
