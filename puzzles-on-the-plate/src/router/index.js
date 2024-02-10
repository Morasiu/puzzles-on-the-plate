import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from "@/views/NotFound.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/recipes/:slug',
            name: 'recipes',
            alias: '/przepisy/:slug',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/RecipeView.vue')
        },
        {
            alias: '/:pathMatch(.*)*',
            path: "/not-found",
            name: 'NotFound',
            component: NotFound
        },
    ]
});
export default router;
