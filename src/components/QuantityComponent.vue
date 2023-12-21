<template>
    <div class="quantity">
      <div class="quantity-div" v-if="stock >= 1">
        <button class="quantity-button" @click="quantitySubtract"><h1>-</h1></button>
        <p>{{ quantity }}</p>
        <button class="quantity-button" @click="quantityAdd"><h1>+</h1></button>
      </div>
      <h2 v-if="stock === 0">Tijdelijk niet beschikbaar</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quantity: 1,
      };
    },
  
    props: ["stock", "cartQuantity"],
  
    emits: ["quantity-data"],
  
    watch: {
      quantity() {
        if (this.quantity < 1) {
          this.quantity = 1;
        } else if (this.quantity > this.stock) {
          this.quantity = this.stock;
        }
        this.$emit("quantity-data", this.quantity);
        localStorage.setItem("quantity", this.quantity.toString());
      },
    },
  
    methods: {
      quantityAdd() {
        this.quantity += 1;
      },
      quantitySubtract() {
        this.quantity -= 1;
      },
      restoreQuantityFromLocalStorage() {
        const storedQuantity = localStorage.getItem("quantity");
        if (storedQuantity) {
          this.quantity = parseInt(storedQuantity, 10);
        }
      },
    },
  
    created() {
      this.restoreQuantityFromLocalStorage();
    },
  };
  </script>