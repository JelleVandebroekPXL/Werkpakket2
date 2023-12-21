<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
               
            }
        },
        components: {
            HeaderComponent,
            ProductsComponent,
            FooterComponent,
        }
    }
</script>

<template>
    <HeaderComponent/>
    <ProductsComponent/>
    <FooterComponent/>
</template>