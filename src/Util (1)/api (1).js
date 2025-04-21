
import qs from "qs";
const env = process.env;
const API_PATH = env.REACT_APP_API_PATH;

console.log("DSF", API_PATH);
const token = localStorage.getItem("auth_Token");
console.log("TOJEN",token)
const api = ({ uri, method, body }) => {
  let url = `${API_PATH}/${uri}`;
  console.log("Request URL:", url);

  // Define the base fetch options
  const options = {
    method: method || "GET", // Default to GET if method is not provided
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`, 
    }
  };

  // If the method is POST, PUT, or PATCH, we include the body
  if (method === "POST" || method === "PUT" || method === "PATCH") {
    options.body = JSON.stringify(body);  // Using 'body' from the argument
  }

  // Send the request
  return fetch(url, options)
    .then(response => response.json()) // Assuming response is JSON
    .then(data => {
      console.log("Response data:", data);
      return data;  // Return the response data
    })
    .catch(error => {
      console.error("Error:", error);
    });
};


const get = ({ uri, ...others }) => api({ uri, method: "GET", ...others });
const post = ({ uri, body, ...others }) =>
  api({ uri, method: "POST", body, ...others });
// const patch = ({ uri, body, ...others }) =>
//   api({ uri, method: "PATCH", body, ...others });
// const del = ({ uri, ...others }) => api({ uri, method: "DELETE", ...others });

export const loginReq = (body) => get({ uri: "timeSheet/getTimeSheetsByUserIdAndGivenDates?startDate=2025-03-11&endDate=2025-03-17&userId=2", body });

// fetch("http://192.168.5.29:8080/TimeSheetAPI/user/login", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values)
//       })





// import qs from "qs";
// const env = process.env;
// const API_PATH = env.REACT_APP_API_PATH;

// const api = ({ uri, method, params, body, headers, isUpload }) => {
//   let url = `${API_PATH}/${uri}`;
//   console.log("URL",url);
//   if (params) {
//     // qs.stringify sample code => Object.entries(x).map(item => `${item[0]}=${item[1]}`).join('&')
//     for (let key in params) {
//       if (params[key] === "") {
//         delete params[key];
//       }
//     }
//     url = `${url}?${qs.stringify(params)}`;
//   }
//   const token = localStorage.getItem("AUTH_TOKEN");
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method,
//       ...(!isUpload && {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : undefined,
//           ...headers,
//         },
//       }),
//       body: isUpload ? body : JSON.stringify(body),
//     })
//       .then((res) => {
//         // if (res.status === 401) {
//         //   window.location = `${window.location.origin}${window.location.pathname}#/login`;
//         //   reject(res);
//         // } else
//         if (res.status < 400) {
//           return res.json().then((res) => resolve(res));
//         } else if (res && res.status >= 400) {
//           return res.json().then((err) =>
//             reject({
//               ...err,
//               status: res.status,
//               statusText: res.statusText,
//             })
//           );
//         }
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// const get = ({ uri, ...others }) => api({ uri, method: "GET", ...others });
// const post = ({ uri, body, ...others }) =>
//   api({ uri, method: "POST", body, ...others });
// const patch = ({ uri, body, ...others }) =>
//   api({ uri, method: "PATCH", body, ...others });
// const del = ({ uri, ...others }) => api({ uri, method: "DELETE", ...others });

// //common
// export const loginReq = (body) => post({ uri: "user/login", body });

// export const register = (body) => post({ uri: "user/registration", body });

// export const createLabel = (body) => post({ uri: "label/save", body });

// export const getLabels = (params) => get({ uri: "label/get", params });

// export const createTask = (body) => post({ uri: "task/create", body });

// export const getTasks = (params) => get({ uri: "task/get", params });               