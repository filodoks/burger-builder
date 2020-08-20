import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-my-burger-b187f.firebaseio.com/",
});

export default instance;
