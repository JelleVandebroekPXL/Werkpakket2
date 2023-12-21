<script>
import HeadingComponent from '@/components/HeadingComponent.vue'
import ConfirmComponent from '@/components/ConfirmComponent.vue'
import WinkelmandComponent from '@/components/WinkelmandComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
               button_text: "Go back"
            }
        },
        props: {
            addressData: {
                type: Object,
                required: true,
            },
        },
        components: {
            HeadingComponent,
            ConfirmComponent,
            WinkelmandComponent,
            FooterComponent,
            WinkelmandComponent
        },
        methods:
        {
            Home() {
                this.$router.push('/Home')
            }
        }
    }
</script>

<template>
    <HeadingComponent/>
    <ConfirmComponent/>
    <WinkelmandComponent/>
    <button type="button" class="GoBackButton" @click="Home()">{{ button_text }}<font-awesome-icon icon="cart-shopping" /></button>
    <FooterComponent/>
</template>