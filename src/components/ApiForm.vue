<template>
	<v-form @submit.prevent="submitForm" class="ma-4" v-model="isFormValid">
		<h2>Select Your Params</h2>
		<v-divider></v-divider>

		<v-container class="form-control" id="api-call">
			<!-- 1. no. of results, default set to 5 -->
			<v-row align="center" justify="center">
				<v-col cols="2">
					<h4>No. of Users</h4>
				</v-col>
				<v-col cols="10">
					<v-select standard :items="resultsSelect" v-model="results">
					</v-select>
				</v-col>
			</v-row>
			<v-row v-show="!resultsValidity">
				<v-col cols="2"></v-col>
				<v-col cols="10">
					<v-alert color="red lighten-2 text-left" dark>
						<i class="mdi mdi-alert-circle-outline mr-1"></i>
						No. of Users should exceed the number of Nations
					</v-alert>
				</v-col>
			</v-row>
			<!-- 2. gender type, default includes both -->
			<v-row align="center" justify="center">
				<v-col cols="2">
					<h4>Gender</h4>
				</v-col>
				<v-col cols="10">
					<v-radio-group v-model="genderRadio" row>
						<v-radio label="male" value="male"></v-radio>
						<v-radio label="female" value="female"></v-radio>
						<v-radio label="both" value="both"></v-radio>
					</v-radio-group>
				</v-col>
			</v-row>
			<!-- 3. Select nations, no. of checked checkboxes must be equal or less than results -->
			<v-row align="center" justify="center">
				<v-col cols="2">
					<h4>Nationality</h4>
				</v-col>
				<v-col cols="10">
					{{ numOfNationsChecked }}
					<v-row
						v-for="(column, index) in nationColumns"
						:key="index"
						dense>
						<v-col
							v-for="(nation, index) in column"
							:key="index"
							cols="3">
							<v-checkbox
								:label="nation"
								:value="nation"
								name="nation"
								v-model="nationsCheck">
								<template v-slot:label>
									<div>
										<img
											:src="
												'https://flagsapi.com/' +
												nation +
												'/flat/64.png'
											" />
									</div>
									<div>
										<p>{{ nation }}</p>
									</div>
								</template>
							</v-checkbox>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
			<v-row align="center" justify="center">
				<v-col cols="2"></v-col>
				<v-col cols="10">
					<v-btn
						type="button"
						@click="
							visible =
								visible * 8 >= nationalities.length
									? visible
									: visible + 2
						"
						v-if="!(visible * 8 >= nationalities.length)">
						Show All
					</v-btn>
					<v-btn
						type="button"
						@click="visible = 1"
						v-if="visible * 8 >= nationalities.length">
						Show Less
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<v-divider class="mt-4 mb-8"></v-divider>
		<v-container>
			<v-btn
				type="submit"
				@click.native="submitForm"
				form="api-call"
				:disabled="!isFormValid"
				>Submit Form</v-btn
			>
		</v-container>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			visible: 1,
			genderRadio: null,
			nationsCheck: [],
			results: 10,
			resultsSelect: [5, 10, 15, 20],
			resultsValidity: true,
			nationalities: [
				"AU",
				"BR",
				"CA",
				"CH",
				"DE",
				"DK",
				"ES",
				"FI",
				"FR",
				"GB",
				"IE",
				"IN",
				"IR",
				"MX",
				"NL",
				"NO",
				"NZ",
				"RS",
				"TR",
				"UA",
				"US",
			],
			isFormValid: true,
		};
	},
	computed: {
		nationColumns() {
			let nationColumns = [];
			for (let i = 0; i < this.visible; i++) {
				nationColumns.push(this.nationalities.slice(i * 8, i * 8 + 8));
			}
			console.log(this.visible);
			return nationColumns;
		},
		numOfNationsChecked() {
			return this.nationsCheck.length;
		},
	},
	watch: {
		numOfNationsChecked(newValue) {
			if (newValue > this.results) {
				this.resultsValidity = false;
			} else {
				this.resultsValidity = true;
			}
		},
		results(newValue) {
			if (newValue < this.numOfNationsChecked) {
				this.resultsValidity = false;
			} else {
				this.resultsValidity = true;
			}
		},
		resultsValidity(newValue) {
			if (newValue === false) {
				this.isFormValid = false;
			} else {
				this.isFormValid = true;
			}
		},
	},
	methods: {
		submitForm() {
			console.log("Gender Radio", this.genderRadio);
			console.log("Nations Check", this.nationsCheck);
			console.log("Results", this.results);
			this.$emit("send-api-params", [
				this.genderRadio,
				this.results,
				this.nationsCheck,
			]);
			this.genderRadio = null;
			this.nationsCheck = [];
			this.results = 5;
			// this.$router.push("users");
		},
	},
};
</script>
