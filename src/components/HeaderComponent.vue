<script>
export default {
    inject: ['cartList'],
        data() {
            return {
               home: "Home",
               about: "About",
               products: "Products",
               sub_heading: "Welke box kies jij?",
               button_text: "Buy Now",
               loginRoute: '/login', // Standaard login-route
               linkText: 'Login',    // Standaard tekst voor de link
            }
        },
        props: {

        },
        methods: {
            Home() {
                this.$router.push('/Home')
            },
            Products() {
                this.$router.push('/Product')
            },
            Login() {
                this.$router.push('/Login')
            },
            Cart() {
                this.$router.push('/Cart')
            },
            handleLoginClick() 
            {

            const ingelogd = 1;


                if (ingelogd) 
                {
                    this.loginRoute = '/login';
                    this.linkText = 'Login';
                } 
                else 
                {
                    this.loginRoute = '/login';
                    this.linkText = 'Login';
                }
            }
        },
        computed: {
            totalItems() {
            let total = 0;
            this.cartList.forEach(product => {
                total = Math.round(parseFloat(total) + product.quantity);
            });
            return total;
            },
            showtotalItems() {
            return this.totalItems;
            },
        },

        created() {
            const ingelogd =  1;

            if (ingelogd) {
            this.loginRoute = '/login';
            this.linkText = 'Login';
            } else {

            this.loginRoute = '/login';
            this.linkText = 'ee"n';
            }
        },
    }
</script>

<template>
    <header class="header">
        <div class="header-nav">
            <div class="nav">
                <ul>
                    <li><a @click="Home()">{{ home}}</a></li>
                    <li><a href="#">{{ about }}</a></li>
                    <li><a @click="Products()">{{ products }}</a></li>
                </ul>
            </div>
            <div class="logo">
            <a href="#">
                <img src="../assets/logo.png">
            </a>
            </div>
            <div class="info">
                <a @click="Login()">
                    <font-awesome-icon icon="user" />
                    
                </a>
                <a  @click="Cart()">
                    <font-awesome-icon icon="cart-shopping" />
                    <h1>{{ showtotalItems }}</h1>
                </a>
            </div>
        </div>
            <div class="header-banner">
                <h3 class="sub-heading">{{ sub_heading }}</h3>
                <button type="button" @click="Products()" class="main-button">{{ button_text }}</button>
            </div>
    </header>
</template>
