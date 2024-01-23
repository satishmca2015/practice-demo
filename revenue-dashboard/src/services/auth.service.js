// import { useNavigate } from "react-router-dom";
import axios from "axios";
// const API_URL = "http://localhost:5000/api/";
const API_URL = "http://34.93.26.72:5000/api/";
// import { useHistory } from "react-router-dom";

// const history = useHistory();

export function login(email, password) {
  return axios
    .post(API_URL + "users/login", { email, password })
    .then((response) => {
      if (response.data.status  === true) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

export async function getOperators() {
  return await axios.get(API_URL + "users/operators");
}

export async function getOperatorsRevenue(id) {
  return await axios.get(API_URL + "operator/revenue?id=" + id);
}

export async function getOperatorsWiseRevenue(id) {
  return await axios.get(API_URL + "operator/opwiserevenue?id=" + id);
}

export async function getTodaysRevenue() {
  return await axios.get(API_URL + "operator/todaysrevenue");
}

export function logout() {
  localStorage.removeItem("user");
}

/*  register(username, email, password) {
    return axios.post(API_URL + "signup", { username, email, password });
  }
 */
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}
