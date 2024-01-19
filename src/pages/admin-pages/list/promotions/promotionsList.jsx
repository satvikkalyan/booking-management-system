import "./../list.css";
import Datatable from "../../../../components/admin-components/datatable/Datatable";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import {promotionsCol} from "../../../../components/utility/constants";
import {promotionRows} from "../../../../resources/sampleData/samplePromotionsData";
import { useEffect, useState } from "react";
import { getPromotions } from "../../../../components/utility/fetchCalls";
const PromotionsList = () => {
  const [promotionsData,setPromotionsData] = useState(promotionRows)
useEffect(() => {
  getPromotions().then((data)=>{
    setPromotionsData(data)
  })

  return () => {
    
  }
}, [])

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable props={{entity: "Promotions",cols: promotionsCol,data:promotionsData}}/>
      </div>
    </div>
  );
};

export default PromotionsList;
