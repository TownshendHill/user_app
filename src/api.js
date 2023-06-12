import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

const getUsers = (numOfUsers = 10) => {
	return axios
		.get(`${BASE_URL}?results=${numOfUsers}`)
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
