<script>
import QuantityInputComponent from '../components/QuantityComponent.vue'

export default {
  components: {
    QuantityInputComponent
  },

  props: ['product'],

  emits: ['quantity-data', 'remove-item'],

  data() {
    return {
      subtotal: (Math.round((this.product.price * this.product.quantity) * 100) / 100).toFixed(2),
      BTW: (Math.round((((this.product.price / 100) * this.product.BTW) * this.product.quantity) * 100) / 100).toFixed(2),
      error: null,
      product_name: "Voetbalbox",
      product_description1: 'Ben jij een enorme sportfan? Verbaas je graag je vrienden met unieke shirts." Duik dan in het avontuur van het onbekende met ons Mystery Shirt. Laat je verrassen door de opwinding van het onverwachte, want soms zit de magie verscholen in het mysterie.',
      product_description2: 'Waarom kiezen voor het voorspelbare als je het onvoorspelbare kunt omarmen? Elk shirt is als een cadeautje aan jezelf, met de belofte van een nieuwe ontdekking en een vleugje spanning in je dagelijkse stijl. Koop nu en voeg een vleugje mysterie toe aan je collectie.',
      product_price: "€00,00",
      product_amount: 2,
    };
  },

  computed: {
    subtotalChange() {
      return 'Subtotaal: €' + (Math.round((this.product.price * this.product.quantity) * 100) / 100).toFixed(2);
    },
    BTWchange() {
      return 'BTW: €' + (Math.round((((this.product.price / 100) * this.product.btw) * this.product.quantity) * 100) / 100).toFixed(2);
    },
    priceString() {
      return 'Prijs: €' + (Math.round((this.product.price * 1.21) * this.product.quantity * 100) / 100).toFixed(2);
    },
  },

  watch: {
    product: {
      handler() {
        this.saveToLocalStorage();
      },
      deep: true,
    },
  },

  created() {
    this.retrieveFromLocalStorage();
  },

  methods: {
    setQuantityData(quantity) {
      if (quantity <= this.product.stock) {
        this.$emit('quantity-data', quantity, this.product.id);
        this.error = null;
      } else {
        this.error = 'Niet genoeg voorraad beschikbaar';
      }
    },
    removeItem() {
      this.$emit('remove-item', this.product.id);
    },

    saveToLocalStorage() {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      cartData[this.product.id] = {
        quantity: this.product.quantity,
      };
      localStorage.setItem('cart', JSON.stringify(cartData));
    },

    retrieveFromLocalStorage() {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      if (cartData[this.product.id]) {
        this.$emit('quantity-data', cartData[this.product.id].quantity, this.product.id);
      }
    },
  }
}
</script>

<template>
        <div class="productDetail">
            <img class="productDetail-image" :src="`src/assets/products/${product.img}`" :alt="product.title">
            <h1 class="productDetail-name">{{ product.title }}</h1>
            <QuantityInputComponent class="productDetail-quantity" :stock="product.stock" :cartQuantity="product.quantity" @quantity-data="setQuantityData"/>
            <div class="productDetail-price">
                <h3 style="font-weight: 400">
                {{ subtotalChange }} <br>
                {{ BTWchange }} <br>
                {{ priceString }}
                </h3>
            </div>
            <div class="productDetail-vuilnis">
                <a @click="removeItem"><font-awesome-icon icon="cart-shopping"/></a>
            </div>
            <div class="error-message" v-if="error">
                {{ error }}
            </div>
        </div>
</template>