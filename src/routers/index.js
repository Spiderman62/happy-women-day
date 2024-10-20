import {createRouter,createWebHistory} from 'vue-router';
export default createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/',component:()=> import('../pages/TheInformation.vue')},
		{path:'/flower',component:()=> import('../pages/TheFlower.vue')}
	]
})