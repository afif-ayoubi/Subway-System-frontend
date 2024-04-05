import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const sendRequest = async (method, route, body) => {
  try {
    const response = await axios.request({
      method: method,
      url: route,
      data: body,
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token") ??
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjY2NTIxLCJleHAiOjE3MTI4NzEzMjEsIm5iZiI6MTcxMjI2NjUyMSwianRpIjoiM1V2ZDl1UEs5TlQyV0JicCIsInN1YiI6IjE3IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.whNyYWUU_us-lygpx_KjRm6liLmL-Y85L6hQ9rxheO8"
        }`,
      },
    });

    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
};
