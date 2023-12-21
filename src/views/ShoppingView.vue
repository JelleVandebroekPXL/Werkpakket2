<script>
import HeadingComponent from '@/components/HeadingComponent.vue'
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
               
            }
        },
        components: {
            HeadingComponent,
            ShoppingCartComponent,
            FooterComponent,
        }
    }
</script>

<template>
    <HeadingComponent/>
    <ShoppingCartComponent/>
    <FooterComponent/>
</template>