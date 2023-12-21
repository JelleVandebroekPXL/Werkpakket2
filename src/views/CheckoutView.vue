<script>
import HeadingComponent from '@/components/HeadingComponent.vue'
import WinkelmandComponent from '../components/WinkelmandComponent.vue'
import CheckoutFormComponent from '../components/CheckoutFormComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
               
            }
        },
        components: {
            HeadingComponent,
            WinkelmandComponent,
            CheckoutFormComponent,
            FooterComponent,
        }
    }
</script>

<template>
    <HeadingComponent/>
    <h1 class="Checkout">Checkout Pagina</h1>
    <WinkelmandComponent/>
    <CheckoutFormComponent/>
    <FooterComponent/>
</template>