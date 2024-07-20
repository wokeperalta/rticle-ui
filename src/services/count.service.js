const serverUrl = "https://rticle-api.herokuapp.com";
export const getUserCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(`${serverUrl}/user/getCount`, requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};

export const getArticlesCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(`${serverUrl}/article/getCount`, requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};

export const getBufferCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(`${serverUrl}/buffer/getCount`, requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};
