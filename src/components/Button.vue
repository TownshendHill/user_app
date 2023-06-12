<template>
	<div class="button" :style="styles" :class="classes" @click="onClick">
		<slot>button</slot>
	</div>
</template>

<script>
export default {
	name: "CustomButton",

	props: {
		buttonCancel: {
			type: Boolean,
			default: false,
		},
		buttonLarge: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		width: {
			type: String,
			default: "100%",
		},
	},
	computed: {
		classes() {
			return {
				"button-cancel": this.buttonCancel,
				"button-large": this.buttonLarge,
				disabled: this.disabled,
			};
		},
		styles() {
			return {
				width: this.width,
			};
		},
	},
	methods: {
		onClick(e) {
			!this.disabled && this.$emit("click", e);
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	height: 48px;
	font-size: 18px;
	background-color: blue;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	cursor: pointer;
	border: 1px solid blue;
	box-sizing: border-box;

	&:hover {
		background-color: red;
	}

	&.button-cancel {
		border: 1px solid blue;
		background-color: transparent;

		&:hover {
			color: gray;
		}
	}

	&.button-large {
		height: 70px;
		font-size: 24px;
		padding: 0 12px;
	}

	&.disabled {
		background-color: gray;
		color: white;
		cursor: not-allowed;
		border: 1px solid green;
	}
}
</style>
