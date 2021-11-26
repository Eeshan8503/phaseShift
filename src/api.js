import axios from 'axios';
const PORT=process.env.PORT||8000;
export default axios.create({
  // baseURL: `http://localhost:${PORT}`
  baseURL: `https://digital-vibes.herokuapp.com`
});
