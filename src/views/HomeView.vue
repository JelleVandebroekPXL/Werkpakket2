<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopProductComponent from '@/components/TopProductComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
        data() {
            return {
                item1: {"stock": 0},
                item2: {"stock": 0},
                item3: {"stock": 0}
            }
        },
        components: {
            HeaderComponent,
            TopProductComponent,
            AboutComponent,
            FooterComponent,
        },
        inject:
        [
            'productList'
        ],
        methods: {
      getTopProducts(productList) {
        let topProducts = []
        let item1 = {"stock": 0}
        let item2 = {"stock": 0}
        let item3 = {"stock": 0}
        productList.forEach(product => {
          if(product.stock > item1.stock) {
            item1 = product;
          } else if(product.stock > item2.stock) {
            item2 = product;
          }  else if(product.stock > item3.stock) {
            item3 = product;
          }
        });
        topProducts.push(item1, item2, item3);
        return topProducts;
      }
    },
    }
</script>

<template>
    <HeaderComponent/>
    <AboutComponent/>
    <TopProductComponent :topProducts=" getTopProducts(productList)"/>
    <FooterComponent/>
</template>

<style>
</style>
