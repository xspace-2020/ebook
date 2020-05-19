import axios from "axios";

let axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// async function refreshToken() {
//   const cognitoUser = await Auth.currentAuthenticatedUser();
//   const currentSession = await Auth.currentSession();
//   cognitoUser.refreshSession(currentSession.refreshToken, (err, session) => {
//     if (err) {
//       console.log("sign out");
//     }
//     let profile = JSON.parse(localStorage.getItem("storage_profile"));
//     profile.signInUserSession = session;
//     localStorage.setItem("storage_profile", JSON.stringify(profile));
//   });
// }

// axiosInstance.interceptors.request.use(
//   async function (config) {
//     try {
//       const user = await Auth.currentAuthenticatedUser();
//       let expireTime = moment.unix(user.signInUserSession.idToken.payload.exp);
//       let currentTime = moment();
//       let diff = moment.duration(expireTime.diff(currentTime));
//       let minutes = diff.asMinutes();
//       if (parseInt(Math.round(minutes)) < 20) refreshToken();
//       if (user.signInUserSession.idToken.jwtToken) {
//         config.headers.Authorization = `Bearer ${user.signInUserSession.idToken.jwtToken}`;
//       }
//     } catch (error) {}
//     return config;
//   },
//   function (error) {
//     console.log("error bro: ", error);
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   (error) => {
//     console.log("interceptor error: ", error);
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
