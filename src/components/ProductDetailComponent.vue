<script>
import QuantityComponent from '../components/QuantityComponent.vue'

export default {
    data() {
            return {
                quantity: 1
            }
        },
    components: {
    QuantityComponent
  },

  inject: ['productList', 'cartList', 'loggedIn'],

  computed: {
    destinationId() {
      return this.$route.params.id;
    },

    product() {
      return this.productList.find(listItem => listItem.id === this.destinationId);
    },

    buttonText() {
      return this.product.stock === 0 ? 'Bekijk andere producten' : 'In winkelwagen plaatsen';
    }
  },

  methods: {
    handleButtonClick() {
      console.log('loggedIn:', this.loggedIn);
      console.log('product.stock:', this.product.stock);
      console.log('quantity:', this.quantity);

      if (this.loggedIn) {
        if (this.product.stock > 0 && this.quantity <= this.product.stock) {
          let newProduct = { ...this.product };
          newProduct.quantity = this.quantity;
          this.cartList.push(newProduct);
          this.product.stock -= this.quantity;
          this.quantity = 1;
          console.log('Product toegevoegd aan winkelwagen');
        } else {
          console.log('Onvoldoende voorraad of ongeldige hoeveelheid');
          this.$router.push('/products');
        }
      } else {
        console.log('Redirecting to /login');
        this.$router.push('/login');
        alert('Log in om een product aan de winkelwagen toe te voegen');
      }
    },

    setQuantityData(quantity) {
      this.quantity = quantity;
    }
  },

  mounted() {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    console.log('Stored loggedIn:', storedLoggedIn);
    if (storedLoggedIn === 'true') {
      this.loggedIn = true;
    }
  }
};
</script>

<template>
    <section class="product-details">
        <div class="product-img">
            <img :src="`../src/assets/Products/${product.img}`" :alt="product.title">
        </div>
        <div class="product-info">
            <h3 class="product-name">{{ product.title  }}</h3>
            <p class="product-description">{{ product.description}}
                </p>
            <p class="product-price">€ {{ product.price }}</p>
            <hr>
            <QuantityComponent id="component" :stock="product.stock" @quantity-data="setQuantityData"/>
            <router-link v-if="product.stock === 0" to="/products">
                <button class="productdetails__buttons">{{ buttonText }}</button>
            </router-link>
            <button v-else class="main-button" @click="handleButtonClick" :disabled="product.stock === 0 && !loggedIn">
                {{ buttonText }}
            </button>
        </div>
    </section>
</template>