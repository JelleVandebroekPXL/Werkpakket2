<script>
import WinkelmandComponent from '../components/WinkelmandComponent.vue'
export default {
        data() {
            return {
               product_name: "Voetbalbox",
               product_description1: 'Ben jij een enorme sportfan? Verbaas je graag je vrienden met unieke shirts." Duik dan in het avontuur van het onbekende met ons Mystery Shirt. Laat je verrassen door de opwinding van het onverwachte, want soms zit de magie verscholen in het mysterie.',
               product_description2: 'Waarom kiezen voor het voorspelbare als je het onvoorspelbare kunt omarmen? Elk shirt is als een cadeautje aan jezelf, met de belofte van een nieuwe ontdekking en een vleugje spanning in je dagelijkse stijl. Koop nu en voeg een vleugje mysterie toe aan je collectie.',
               product_price: "€00,00",
               product_amount: 2,

               total_price: "€00,00",
               button_text: "Confirm",
            }
        },
        components: {
            WinkelmandComponent,
        },
        methods:
        {
            Checkout() {
                this.$router.push('/Checkout')
            }
        }
    }
</script>

<template>>
        <WinkelmandComponent/>
</template>