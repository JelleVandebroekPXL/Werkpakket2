<script>
export default {
  data() {
    return {
        adres: {
        name: '',
        lastName: '',
        address: '',
        postcode: '',
        housenumber: '',
        city: '',
      },
      showFactuur: false,
    };
  },
  methods: {
    toggleFactuur() {
        this.showFactuur != this.showFactuur
    },
    Confirmation() {
      this.$router.push('/Confirmation');
    }
  },
};
</script>

<template>
    <div class="CheckoutForm">
      <div>
        <h2>Adresgegevens</h2>
        <form @submit.prevent="submitForm">
            <label for="naam">Naam:</label>
            <input type="text" id="naam" v-model="adres.name" required><br><br>

            <label for="naam">Achternaam:</label>
            <input type="text" id="naam" v-model="adres.lastName" required><br><br>

            <label for="adres">Adres:</label>
            <input type="text" id="adres" v-model="adres.adres" required><br><br>

            <label for="postcode">Postcode:</label>
            <input type="text" id="postcode" v-model="adres.postcode" required><br><br>

            <label for="huisnummer">Huisnummer:</label>
            <input type="text" id="huisnummer" v-model="adres.housenumber" required><br><br>

            <label for="plaats">Plaats:</label>
            <input type="text" id="plaats" v-model="adres.plaats" required><br><br>
        </form>
      </div>
  
      <div>
        <input type="checkbox" v-model="showFactuur" @change="toggleFactuur">
        <label>Ik wil andere Facturatiegegevens</label>
      </div>
  
      <div v-if="showFactuur">
        <h2>Facturatiegegevens</h2>
        <form @submit.prevent="submitForm">
            <label for="naam">Naam:</label>
            <input type="text" id="naam" v-model="adres.name" required><br><br>

            <label for="naam">Achternaam:</label>
            <input type="text" id="naam" v-model="adres.lastName" required><br><br>

            <label for="adres">Adres:</label>
            <input type="text" id="adres" v-model="adres.adres" required><br><br>

            <label for="postcode">Postcode:</label>
            <input type="text" id="postcode" v-model="adres.postcode" required><br><br>

            <label for="huisnummer">Huisnummer:</label>
            <input type="text" id="huisnummer" v-model="adres.housenumber" required><br><br>

            <label for="plaats">Plaats:</label>
            <input type="text" id="plaats" v-model="adres.plaats" required><br><br>
        </form>
      </div>
      <button @click="Confirmation()" class="PayButton">Betalen</button>
    </div>
  </template>