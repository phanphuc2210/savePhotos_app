import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {
            params
        });
    },
}


export default productApi;