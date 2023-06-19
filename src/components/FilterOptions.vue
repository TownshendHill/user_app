<template>
	<div style="width: 100%">
		<v-row justify="space-around" v-show="genders.length > 1">
			<v-col cols="12">
				<!-- <v-chip pill class="blue lighten-5" @click="onFilterGender()"
					>Male
				</v-chip>
				<v-chip pill class="pink lighten-5" @click="onFilterGender()"
					>Female
				</v-chip> -->
				<v-chip
					v-for="(gender, index) in genders"
					:key="gender"
					:class="{
						'ml-4': index > 0,
						'blue lighten-5': gender === 'male',
						'pink lighten-5': gender === 'female',
					}"
					:genders="genders"
					@click="onFilterGender(gender)"
				>
					{{ gender }}
				</v-chip>
			</v-col>
		</v-row>
		<v-row class="mt-0">
			<v-col cols="12">
				<v-chip
					v-for="(nation, index) in nations"
					:key="nation"
					:class="{ 'ml-4': index > 0 }"
					:nations="nations"
					@click="onFilterNation(nation)"
				>
					<v-img
						:src="getFlagImage"
						loading
						class="flex-grow-0 flex-shrink-1"
						width="64"
					/>
					{{ nation }}
				</v-chip>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	name: "FilterOptions",
	props: {
		genders: {
			type: Array,
			required: true,
			default: () => {},
		},
		nations: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
	methods: {
		onFilterGender(gender) {
			this.$emit("filterGender", { gender, message: "test123" });
		},
		onFilterNation(nation) {
			this.$emit("filterNation", nation);
		},
	},
	computed: {
		getFlagImage() {
			return `https://flagsapi.com/${this.nation}/flat/32.png`;
		},
	},
	mounted() {
		console.log("can i use this?");
	},
};
</script>
