<script>
export default {
        data() {
            return {
               titel: "Onze Producten",
               button_text: "Read more",
               description1: 'Ben jij een enorme sportfan? Verbaas je graag je vrienden met unieke shirts." Duik dan in het avontuur van het onbekende met ons Mystery Shirt. Laat je verrassen door de opwinding van het onverwachte, want soms zit de magie verscholen in het mysterie.',
               description2: 'Waarom kiezen voor het voorspelbare als je het onvoorspelbare kunt omarmen? Elk shirt is als een cadeautje aan jezelf, met de belofte van een nieuwe ontdekking en een vleugje spanning in je dagelijkse stijl. Koop nu en voeg een vleugje mysterie toe aan je collectie.'
            }
        }
    }
</script>

<template>
        <section class="about">
        <div class="about-left">
            <img src="src/assets/Product.jpg" alt="Picture of our team">
        </div>
        <div class="about-right">
            <h3 class="about-title">{{ titel }}</h3>
            <div class="stars">
                <i class="fas fa-star-of-life star"></i>
                <i class="fas fa-star-of-life star"></i>
                <i class="fas fa-star-of-life star"></i>
            </div>
            <p class="description">{{ description1 }}<br><br>{{ description2 }}
                
            </p>
            <div class="stars">
                <i class="fas fa-star-of-life star"></i>
                <i class="fas fa-star-of-life star"></i>
                <i class="fas fa-star-of-life star"></i>
            </div>
            <button class="main-button" type="button">{{ button_text }}</button>
        </div>
    </section>
</template>