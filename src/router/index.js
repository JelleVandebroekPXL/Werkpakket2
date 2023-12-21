import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import DetailsView from '../views/DetailsView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        // { path: '/positions' , component: PositionsList},
        { path: '/' , redirect: '/Home'},
        { path: '/Home', component: HomeView},
        { path: '/Product', component: ProductsView},
        { path: '/Product/:id', name: ':id', component: DetailsView },
        { path: '/Login', component: LoginView},
        { path: '/Details', component: DetailsView},
        { path: '/Cart', component: ShoppingView},
        { path: '/Checkout', component: CheckoutView},
        { path: '/Confirmation', component: ConfirmationView},

        // { path: '/:notFound(.*)' , component: NotFound}
    ]
})

export default router