<template>
	<v-app class="grey lighten-5">
		<v-main>
			<p v-if="isLoading">Loading.....</p>
			<v-container v-else>
				<v-row justify="space-around">
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
				<v-row>
					<v-col>
						<div>num of users: {{ numOfUsers }}</div>
					</v-col>
				</v-row>
				<v-row>
					<FilterOptions
						:genders="genders"
						:nations="nations"
						@filterGender="filterGender"
						@filterNation="filterNation"
					></FilterOptions>
				</v-row>
				<v-row class="d-flex flex-wrap justify-space-between">
					<UserCard
						v-for="(user, index) in users"
						:key="index"
						:userInfo="user"
						:isEven="index % 2 === 0"
						:class="{ hide: hideDisplay }"
					></UserCard>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>
<!-- comment -->

<script>
import { getUsers } from "@/api";
import UserCard from "@/components/UserCard";
import FilterOptions from "@/components/FilterOptions.vue";

export default {
	name: "App",
	components: {
		UserCard,
		FilterOptions,
	},
	data() {
		return {
			users: [],
			isLoading: false,
			numOfUsers: 5,
			digitsRules: [(v) => /^\d+$/.test(v) || "Only digits are allowed"],
			// genders: [],
			// nations: [],
			hideDisplay: false,
			price: 100,
		};
	},
	computed: {
		discountPrice() {
			return this.price / 2;
		},
		genders() {
			return [...new Set(this.users.map((user) => user.gender))];
		},
		nations() {
			return [...new Set(this.users.map((user) => user.nat))];
		},
	},
	async created() {
		console.log("App created");
		this.isLoading = true;
		try {
			const response = await getUsers(this.numOfUsers);
			this.users = response.data.results;

			setTimeout(() => {
				this.users = this.users.filter(
					(user) => user.gender === "male"
				);
			}, 5000);
		} catch (error) {
			console.error("error", error);
		} finally {
			this.isLoading = false;
		}
	},
	methods: {
		filterGender(gender) {
			console.log("gender click", gender);
			this.hideDisplay = !this.hideDisplay;
		},
		filterNation(nation) {
			console.log("nation click", nation);
		},
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
		// getGenders() {
		// 	this.genders = [...new Set(this.users.map((user) => user.gender))];
		// },
		// getNations() {
		// 	this.nations = [...new Set(this.users.map((user) => user.nat))];
		// },
	},
	beforeUpdate() {
		console.log("App beforeUpdate");
	},
	updated() {
		console.log("App updated");
	},
	// beforeMount() {
	// 	this.getGenders();
	// },
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

#app .hide {
	display: none;
}
</style>
