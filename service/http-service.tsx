import axios from 'axios';

export const postRequest = async (url: string, data:object) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
    }
};
