<template class="test">
	<!-- for testing, filter pills -->
	<div class="flex-grow-0 fill-height w-50">
		<v-card
			class="mx-auto my-12"
			:class="{ female: isFemale }"
			:style="{ backgroundColor: isFemale ? 'pink' : 'aqua' }"
		>
			<v-avatar size="150">
				<v-img :src="userInfo.picture.large" height="250" contain />
			</v-avatar>
			<div
				class="user-info d-flex flex-column justify-center align-center mt-2"
			>
				<v-row>
					<v-card-title class="full-name">{{
						fullName
					}}</v-card-title>
					<v-img
						:src="getFlagImage"
						loading
						class="flex-grow-0 flex-shrink-1"
						width="64"
					/>
				</v-row>
				<v-card-text class="subheading"
					>age: {{ userInfo.dob.age }}</v-card-text
				>
				<v-card-text v-if="isVipMember">Vip Member</v-card-text>
			</div>
		</v-card>
		<!-- <hr v-if="isEven" /> -->
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
	data() {
		return {
			hasFilterOptions: false,
		};
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
		getFlagImage() {
			return `https://flagsapi.com/${this.userInfo.nat}/flat/64.png`;
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
.w-50 {
	width: calc((100% - 40px) / 3);
}
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
