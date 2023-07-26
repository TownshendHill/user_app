<template>
	<v-app id="app">
		<v-container fluid class="pa-0">
			<p v-if="isLoading">Loading.....</p>
			<v-app-bar v-else class="pb-6">
				<v-toolbar-title shrink-on-scroll> Users App </v-toolbar-title>
				<v-tabs centered dense>
					<v-tab>
						<button @click="onRedirect('home')">Home</button>
					</v-tab>
					<v-tab>
						<button @click="onRedirect('users')">Users</button>
					</v-tab>
				</v-tabs>
			</v-app-bar>
			<v-main class="teal lighten-5">
				<v-container>
					<v-sheet rounded class="transparent pa-4">
						<transition mode="out-in">
							<router-view />
						</transition>
					</v-sheet>
				</v-container>
			</v-main>
		</v-container>
	</v-app>
</template>
<!-- comment -->

<script>
export default {
	name: "App",
	data() {
		return {
			isLoading: false,
		};
	},
	methods: {
		onRedirect(name) {
			this.$router.push({ name });
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
}

.v-enter {
	opacity: 0;
}

.v-enter-to {
	opacity: 1;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s;
}

.v-leave {
	opacity: 1;
}

.v-leave-to {
	opacity: 0;
}
</style>
