import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: "Client-ID e2fc86765a55ad6d0fe05afe3f3d1704f8df154a61a16cfef1ff385e184b69a1",
    }
});
