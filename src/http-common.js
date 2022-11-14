import axios from 'axios';

export default axios.create({
    baseURL:"https://review-for-me.herokuapp.com/api/v1/restaurants/",
    headers: {
        "Content-type":"application/json"
    }
})