import axios from 'axios';

export class UserAPI {
    static async getAll(params) {
        const {data} = await axios.get('https://randomuser.me/api/',{params});
        return data;
    }
}



