import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/pages/HomePage";
import UsersPage from "@/pages/UsersPage";
import UserDetail from "@/pages/UserDetailPage";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/users",
			name: "users",
			component: UsersPage,
			// children: [
			// 	{
			// 		name: "user",
			// 		path: "/:id",
			// 		component: UserDetail,
			// 		props: true,
			// 	},
			// ],
		},
		{
			path: "/:id",
			name: "userDetail",
			component: UserDetail,
			props: true,
		},
	],
});

export default router;
