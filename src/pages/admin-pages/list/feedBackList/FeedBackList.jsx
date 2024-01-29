import React from "react";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import Datatable from "../../../../components/admin-components/datatable/Datatable";
import {feedBackColumns} from "../../../../components/utility/constants";
import {feedBackRows} from "../../../../resources/sampleData/sampleFeedback";

export default function FeedBackList() {
  return (
    <div className="list">
    <Sidebar />
    <div className="listContainer">
      <Datatable
        props={{
          entity: "FeedBack",
          cols: feedBackColumns,
          data: feedBackRows,
        }}
      />
    </div>
  </div>
  )
}

