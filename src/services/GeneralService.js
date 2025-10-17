import axios from 'axios';
import { ref } from "vue";

const url = "https://thesimpsonsapi.com/api";
export const urlImage = "https://cdn.thesimpsonsapi.com/500";
export const currentPage = ref(0);

const handleError = (error) => {
    if (error && error.error instanceof ErrorEvent) {
        window.alert(error.error.message);
    } else {
        if (error.code == 'ERR_NETWORK') {
            window.alert('Conecction Error.');
        } else {
            window.alert(error?.response?.data?.message);
        }
    }
}

export const get = async (endpoint) => {
    try {
        const response = await axios.get(`${url}${endpoint}`);
        return response;
    } catch(error) {
        handleError(error);
        return error;
    }
}