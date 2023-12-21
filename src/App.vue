<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopProductComponent from '@/components/TopProductComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProductList from "./productsList.json";
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
               productList: ProductList,
               cartList: [],
            }
        },
        provide() {
            return {
                productList: this.productList,
                cartList: this.cartList
            }
        },
        components: {
            HeaderComponent,
            TopProductComponent,
            AboutComponent,
            ProductList,
            FooterComponent,
        }
    }
</script>

<template>
    <RouterView/> 
</template>

<style>
</style>
