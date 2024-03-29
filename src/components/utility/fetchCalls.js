import {checkoutAPI, promotionsAPI, propertiesAPI, roomsCountAPI, userAPI, usersCountAPI} from "./constants";

export const getDataFromAPI = (URL) => {
  return fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (data) {
      return {};
    });
};

export const postDataToAPI = (URL, jsonData) => {
  return fetch(URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
};

export const getDataFromMobileNumber = (mobileNumber) => {
  return getDataFromAPI(userAPI + `mobile/${mobileNumber}/`);
};

export const getRoomsCount = async () => {
  return await getDataFromAPI(roomsCountAPI);
};
export const getCustomersCount = async () => {
  const current = new Date();
  // const fromDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()-1}`;

  var currentMonth = current.getMonth() + 1;
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  var currentDay = current.getDate();
  if (currentDay < 10) {
    currentDay = "0" + currentDay;
  }
  const ToDate = `${current.getFullYear()}-${currentMonth}-${currentDay}`;
  const fromDate = `${current.getFullYear()}-${currentMonth}-01`;
  return await getDataFromAPI(usersCountAPI + `${fromDate}/${ToDate}/`);
}; 

export const getProperties = (id) => {
  if (id != null) {
    return getDataFromAPI(`${propertiesAPI}${id}/`);
  }
  return getDataFromAPI(propertiesAPI);
};

export const getUsers = () => {
  return getDataFromAPI(userAPI);
};

export const getUsersByEmail = (userEmail ) =>{
  return getDataFromAPI(userAPI+userEmail+"/");
}


export const deleteItem = (URL,id) =>{
  return fetch(URL+id+"/",{method:"Delete"})

}

export const getPromotions = () =>{
  return getDataFromAPI(promotionsAPI)
}

export const checkoutUser = (id) =>{
  return fetch(checkoutAPI+`${id}/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  });
}

export const postPropData = (json) =>{
  return postDataToAPI(propertiesAPI,json)
}
