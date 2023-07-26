<template>
	<div class="py-4">
		<h1>Home M</h1>
		<api-form @send-api-params="submittedParams"></api-form>
	</div>
</template>

<script>
import ApiForm from "@/components/ApiForm.vue";
export default {
	name: "HomePage",
	data() {
		return {
			params: [],
		};
	},
	components: {
		ApiForm,
	},
	methods: {
		submittedParams(params) {
			this.params = params;
			console.log("event triggered!", params);
		},
	},
};
</script>

<style lang="scss" scoped></style>
