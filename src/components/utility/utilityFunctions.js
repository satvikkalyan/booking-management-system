export const isValidUser = (userData, isGoogle, secretValue) => {
  if (userData?.password === secretValue || isGoogle) {
    return true;
  }
  return false;
};

export const onFailure = (err) => {
  console.log("failed:", err);
};

export const isMobileNumber = (text) => {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(text);
};

export const isUserLoggedIn = (userDetails) => {
  return userDetails?.email?.length > 0;
};

export const getNumberOfDays = (fromDateString, toDateString) => {
  const fromDate = new Date(fromDateString);
  const toDate = new Date(toDateString);
  if (isNaN(toDate.getTime()) || isNaN(fromDate.getTime())) {
    console.error("Invalid date format");
    return null;
  }
  let difference = toDate.getTime() - fromDate.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24)) + 1;
};

export const generateTemplate = (roomData) => {
  var bedArray = [];
  roomData?.map((item) => {
    const rommDet = {
      id: item?.id,
      beds: {
        NW: false,
        NE: false,
        SW: false,
        SE: false,
      },
      availability: item?.bedsAvailable,
      roomName:item?.roomName
    };
    bedArray.push(rommDet);
  });
  return bedArray;
};