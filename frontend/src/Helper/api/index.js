import axios from "axios";

const getRequest = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const response = await axios.get(`${apiUrl}/${path}`, {
        withCredentials: true,
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const postRequest = (path, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const response = await axios.post(`${apiUrl}/${path}`, data, {
        withCredentials: true,
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const putRequest = (path, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const response = await axios.put(`${apiUrl}/${path}`, data, {
        withCredentials: true,
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteRequest = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const response = await axios.delete(`${apiUrl}/${path}`, {
        withCredentials: true,
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const patchRequest = (path, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const response = await axios.patch(`${apiUrl}/${path}`, data, {
        withCredentials: true,
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const putFile = (path, file) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      const formData = new FormData();
      formData.append('file', file); // Make sure 'file' matches your multer setup

      const response = await axios.post(`${apiUrl}/${path}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}


export { getRequest, postRequest, putRequest, deleteRequest, patchRequest,putFile };
