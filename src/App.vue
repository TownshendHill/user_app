<template>
	<div id="app">
		<p v-if="isLoading">Loading.....</p>
		<div v-else>
			<!-- <UserCard :userInfo="user" /> -->
			<UserCard
				v-for="(user, index) in users"
				:key="index"
				:userInfo="user"
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
			user: {},
			users: [],
			isLoading: false,
		};
	},
	async created() {
		this.isLoading = true;
		try {
			const response = await getUsers();
			this.user = response.data.results[0];
			this.users = response.data.results;
			console.table("App.vue users", this.users);
		} catch (error) {
			console.error("error", error);
		} finally {
			this.isLoading = false;
		}
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
