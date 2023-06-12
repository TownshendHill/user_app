<template>
	<div id="app">
		<p v-if="isLoading">Loading.....</p>
		<div v-else>
			<v-row>
				<v-col cols="8">
					<v-text-field
						label="Number of users"
						:rules="digitsRules"
						v-model="numOfUsers"
					></v-text-field>
				</v-col>
				<v-col cols="4">
					<v-btn @click="onGetUsersClick">Get users</v-btn>
				</v-col>
			</v-row>
			<div>num of users: {{ numOfUsers }}</div>
			<UserCard
				v-for="(user, index) in users"
				:key="index"
				:userInfo="user"
				:isEven="index % 2 === 0"
			></UserCard>
		</div>
	</div>
</template>

<script>
import { getUsers } from "@/api";
import UserCard from "@/components/UserCard";

export default {
	name: "App",
	components: {
		UserCard,
	},
	data() {
		return {
			users: [],
			isLoading: false,
			numOfUsers: 10,
			digitsRules: [(v) => /^\d+$/.test(v) || "Only digits are allowed"],
		};
	},
	async created() {
		console.log("App created");
		this.isLoading = true;
		try {
			const response = await getUsers(this.numOfUsers);
			this.users = response.data.results;
		} catch (error) {
			console.error("error", error);
		} finally {
			this.isLoading = false;
		}
	},
	methods: {
		async onGetUsersClick() {
			try {
				const response = await getUsers(this.numOfUsers);
				this.users = response.data.results;
			} catch (error) {
				console.error("error", error);
			} finally {
				this.isLoading = false;
			}
		},
	},
	beforeUpdate() {
		console.log("App beforeUpdate");
	},
	updated() {
		console.log("App updated");
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
