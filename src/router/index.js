import { createRouter, createWebHistory } from 'vue-router';

import CharacterDetail from '../components/CharacterDetail.vue';
import HomePage from "../components/HomePage.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const routes = [
    { path: `/`, component: HomePage },
    { path: '/character/:id', component: CharacterDetail, props: true },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;