import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/

/* PROJECT ROUTES */
export const getAllLessons = () => {
  return axios.get(`${baseURL}/lessons`);
};

export const addLesson = (lesson) => {
  return axios.post(`${baseURL}/add-lesson`, lesson, { withCredentials: true });
};

export const getLesson = (userId) => {
  return axios.get(`${baseURL}/lesson/${userId}`);
};

export const deleteLesson = (lessonId) => {
  return axios.delete(`${baseURL}/lessons/${lessonId}`);
};

export const updateLesson = (updatedLesson) => {
  return axios.put(`${baseURL}/lessons/${updatedLesson.id}`, updatedLesson);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

export const getInstruments = () => {
  return axios.get(`${baseURL}/instruments`);
};

export const getShoppingCar = () => {
  return axios.get(`${baseURL}/shoppingcar`);
};

export const getSearch = () => {
  return axios.get(`${baseURL}/search`);
};


/* AUTHENTICATION API ROUTES */

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const beteacher = (user) => {
  return axios.post(`${baseURL}/beteacher`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};

export const getUser = () => {
  return axios.get(`${baseURL}/profile`, { withCredentials: true });
}

export const updateUser = (updatedUser) => {
  return axios.put(`${baseURL}/profile/${updatedUser.id}`, updatedUser);
};

export const updateSettings = (updatedUser) => {
  return axios.put(`${baseURL}/account-settings/${updatedUser.id}`, updatedUser);
};