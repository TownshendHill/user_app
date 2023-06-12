<template>
	<div>
		<v-card
			class="user-card"
			:class="{ female: isFemale }"
			:style="{ backgrnoudColor: isFemale ? 'pink' : 'aqua' }"
		>
			<div class="user-avatar">
				<img :src="userInfo.picture.large" alt="" />
			</div>
			<div class="user-info">
				<v-card-title class="full-name">{{ fullName }}</v-card-title>
				<v-card-subtitle>age: {{ userInfo.dob.age }}</v-card-subtitle>
				<p v-if="isVipMember">Vip Member</p>
			</div>
		</v-card>
		<hr v-if="isEven" />
	</div>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		userInfo: {
			type: Object,
			default: () => {},
		},
		isEven: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		fullName() {
			return `${this.userInfo.name.first} ${this.userInfo.name.last}`;
		},
		isFemale() {
			return this.userInfo.gender === "female";
		},
		isVipMember() {
			return this.userInfo.registered.age >= 3;
		},
	},
	created() {
		console.log("UserCard created");
		console.log("userInfo", this.userInfo);
	},
	beforeUpdate() {
		console.log("UserCard beforeUpdate");
	},
	updated() {
		console.log("UserCard updated");
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
	background-color: aqua;

	&.female {
		background-color: pink;
	}

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
