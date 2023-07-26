<template>
	<div class="mt-8">
		<div class="users">
			<h1>Users Page</h1>
		</div>
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
		/>
		<router-view />
	</div>
</template>

<script>
import UserCard from "@/components/UserCard";
import { getUsers } from "@/api";
export default {
	name: "UsersPage",
	components: {
		UserCard,
	},
	data() {
		return {
			users: [],
			isLoading: false,
			numOfUsers: 5,
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
	beforeDestroy() {
		console.log("UserPage destroyed");
	},
};
</script>

<style lang="scss" scoped></style>
