import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?results=20";

const getUsers = () => {
	return axios
		.get(BASE_URL)
		.then(function (response) {
			// handle success
			return response;
		})
		.catch(function (error) {
			// handle error
			return error;
		});
};

export { getUsers };
