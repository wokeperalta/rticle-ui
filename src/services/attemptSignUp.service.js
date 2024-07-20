const serverUrl = "https://rticle-api.herokuapp.com";
export const attemptSignUp = async (body) => {
  // console.log("BODY", body);
  var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "multipart/form-data");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
  };

  return await fetch(`${serverUrl}/user/register`, requestOptions);
};
