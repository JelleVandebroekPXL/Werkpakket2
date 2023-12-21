<script>
import TopProductCardComponent from './TopProductCardComponent.vue';
export default {
        data() {
            return {
            }
        },
        methods: {
            goToLink() {
                this.$router.push('/Details')
            }
        },
        components:
        {
            TopProductCardComponent,
        },
        props: [
        'topProducts'
        ],
    }
</script>

<template>
        <section class="topProducts">
        <h3 class="section-title">Top Products</h3>
        <div class="gallery">
            <div class="cards">
                <TopProductCardComponent
                v-for="product in topProducts" :key="product.id"
                :titel="product.title"
                :desc="product.description"
                :image="product.img"
                :id="product.id"/>
            </div>
        </div>
    </section>
</template>
