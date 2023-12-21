<script>
import CartProductComponent from '../components/CartProductComponent.vue'
import PrizeComponent from '../components/PrizeComponent.vue';
export default {
        inject: [
            'cartList'
        ],
        data() {
            return {
               product_name: "Voetbalbox",
               product_description1: 'Ben jij een enorme sportfan? Verbaas je graag je vrienden met unieke shirts." Duik dan in het avontuur van het onbekende met ons Mystery Shirt. Laat je verrassen door de opwinding van het onverwachte, want soms zit de magie verscholen in het mysterie.',
               product_description2: 'Waarom kiezen voor het voorspelbare als je het onvoorspelbare kunt omarmen? Elk shirt is als een cadeautje aan jezelf, met de belofte van een nieuwe ontdekking en een vleugje spanning in je dagelijkse stijl. Koop nu en voeg een vleugje mysterie toe aan je collectie.',
               product_price: "€00,00",
               product_amount: 2,
            }
        },
        components: {
            CartProductComponent,
            PrizeComponent,
        },
        methods:
        {
            setQuantityData(quantity, id) {
                this.cartList.forEach(product => {
                    if(product.id === id) {
                    product.quantity = quantity
                    }
                });
            },
            removeItem(id) {
            this.cartList.forEach(product => {
                if(product.id === id) {
                let index = this.cartList.indexOf(product);
                this.cartList.splice(index, 1);
                }
            });
            },
            Checkout() {
                this.$router.push('/Checkout')
            }
        }
    }
</script>

<template>
    <div class="shoppingCart">
        <h1 class="mandje">Winkelmandje</h1>
        <div v-if="cartList.length === 0">
            <h1>Je winkelwagentje is nog leeg! </h1>
            <button class="main-button">
                <router-link to="/Product" style="text-decoration: none"><h5>Bekijk onze producten</h5></router-link>
            </button>
        </div>
        <div v-if="cartList.length !== 0">
        <CartProductComponent  v-for="product in cartList" :key="product.id" :product="product" @quantity-data="setQuantityData" @remove-item="removeItem"/>
        <hr>
        <PrizeComponent/>
          <button @click="Checkout()" class="checkout-button"><h5>Verder naar bestelling</h5></button>
        </div>
    </div>
</template>