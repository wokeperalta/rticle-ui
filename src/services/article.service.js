const serverUrl = "https://rticle-api.herokuapp.com";
export const approveArticle = async (body, bearerToken) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  return await fetch(`${serverUrl}/article/approve`, requestOptions);
};

export const getArticle = async (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(
    `${serverUrl}/../article/read/${id}`,
    requestOptions
  );
  return await response.json();
};

export const getLatestArticles = async (skip) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    params: JSON.stringify({ skip: skip }),
  };

  const response = await fetch(`${serverUrl}/article/latest`, requestOptions);
  const responseJson = await response.json();
  return responseJson.articles;
};

export const getTrendingArticles = async (skip) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    params: JSON.stringify({ skip: skip }),
  };

  const response = await fetch(`${serverUrl}/article/trending`, requestOptions);
  const responseJson = await response.json();
  return responseJson.articles;
};
