import axios from 'axios';

// interface PostData {
//     key: string;
//     value: string;
// }

export const postRequest = async (url: string, data:any) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        // Handle the error as appropriate for your application
        console.error('Error in POST request:', error);
    }
};