import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/

/* PROJECT ROUTES */
export const getAllLessons = () => {
  return axios.get(`${baseURL}/lessons`);
};

export const addLesson = (lesson) => {
  return axios.post(`${baseURL}/lessons`, lesson);
};

export const getLesson = (lessonId) => {
  return axios.get(`${baseURL}/lessons/${lessonId}`);
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

export const getAllInstruments = () => {
  return axios.get(`${baseURL}/instruments`);
};


/* AUTHENTICATION API ROUTES */

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user);
};
