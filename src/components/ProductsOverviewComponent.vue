<script>
import ProductCardComponent from '../components/ProductCardComponent.vue'

export default {
        components: 
        {
            ProductCardComponent,
        },

        props: [
            'filteredList'
        ]
    }
</script>
<template>
        <section class="products">

        <div class="product-list">
            <div class="gallery">
                <div class="cards">             
                    <ProductCardComponent
                    v-for="product in filteredList" :key="product.id"
                        :title="product.title"
                        :description="product.description"
                        :price="product.price"
                        :image="product.img"
                        :id="product.id">
                    </ProductCardComponent>
                </div>
            </div>
        </div>
    </section> 
</template>