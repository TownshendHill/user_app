<template>
	<v-card class="user-card">
		<p>test</p>
		<div class="user-avatar">
			<img :src="userInfo.picture.large" alt="" />
		</div>
		<v-card-item>
			<v-card-title class="full-name">{{ fullName }}</v-card-title>
			<v-card-subtitle>age: {{ userInfo.dob.age }}</v-card-subtitle>
		</v-card-item>
	</v-card>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		userInfo: {
			// type: Object,
			type: Array,
			default: () => {},
		},
	},
	computed: {
		fullName() {
			return `${this.userInfo.name.first} ${this.userInfo.name.last}`;
		},
	},
	created() {
		console.log("userInfo", this.userInfo);
	},
};
</script>

<style lang="scss" scoped>
.user-card {
	padding: 15px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 400px;
	height: 350px;
	border: 1px solid black;
	border-radius: 8px;

	.user-avatar {
		width: 150px;
		height: 150px;

		img {
			border-radius: 50%;
			width: 100%;
			height: 100%;
		}
	}

	.full-name {
		font-weight: bold;
	}
}
</style>
