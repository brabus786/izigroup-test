import axios from 'axios';

export class UserAPI {
    static async getAll(params) {
        console.log(params);
        const {data} = await axios.get('https://randomuser.me/api/',{params});
        return data;
    }
}



