<template>
	<div>
		<v-row class="my-8 align-center justify-center">
			<v-col fill-height cols="3">
				<v-card tile>
					<v-img height="100%" :src="info.picture.large"> </v-img>
					<v-card-title
						class="text-center justify-center"
						v-text="
							info.name.first + ' ' + info.name.last
						"></v-card-title>
					<v-card-subtitle
						v-text="info.dob.age"
						class="text-center justify-center">
					</v-card-subtitle>
				</v-card>
			</v-col>
			<v-col>
				<v-card tile class="px-4 py-2">
					<v-simple-table dense>
						<tbody>
							<tr>
								<th>Email</th>
								<td>
									{{ info.email }}
								</td>
							</tr>
							<tr>
								<th>Phone</th>
								<td>
									{{ info.phone }}
								</td>
							</tr>
							<tr>
								<th>Age</th>
								<td>
									{{ info.dob.age }}
								</td>
							</tr>
							<tr>
								<th>From</th>
								<td>
									{{ info.location.country }},
									{{ info.location.state }}
								</td>
							</tr>
							<tr>
								<th>Address</th>
								<td>
									{{ info.location.street.number }},
									{{ info.location.street.name }}
									<br />
									{{ info.location.city }},
									{{ info.location.postcode }}
								</td>
							</tr>
						</tbody>
					</v-simple-table>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-btn @click="onBack"> Back </v-btn>
		</v-row>
	</div>
</template>

<script>
export default {
	name: "UserDetail",
	props: {
		info: {
			type: Object,
			default: () => {},
		},
	},
	async created() {
		console.log("info", this.info);
		// request api
		// get user images by id
		console.log("id", this.$route.params);
		// getUserImagesById returns the images of the user
	},
	beforeDestroy() {
		console.log("UserDetail destroyed");
	},
	methods: {
		onBack() {
			this.$router.back();
		},
	},
};
</script>
