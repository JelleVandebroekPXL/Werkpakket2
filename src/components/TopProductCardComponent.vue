<script>
export default {
        data() {
            return {
                button_text: "Meer Info"
            }
        },
        props: [
        'title',
        'description',
        'image',
        'price',
        'id'
        ],
        methods: {
            goToLink() {
            this.$router.push('/Product/' + this.id)
        }
        }
    }
</script>

<template>
                <div class="card">
                    <img :src="`src/assets/Products/${image}`">
                    <div class="card-content">
                        <h4 class="card-title">{{ title }}</h4>
                        <p class="card-description">{{ description }}</p>
                        <div class="price-and-button">
                            <p class="card-price">{{ price }}</p>
                            <a class="card-button" @click="goToLink()">
                                <button type="button" class="button">{{ button_text }}</button>
                            </a>
                        </div>
                    </div>
                </div>
</template>
