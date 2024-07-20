const serverUrl = "https://rticle-api.herokuapp.com";
export const attemptLogin = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  return await fetch(`${serverUrl}/user/login`, requestOptions);
};
