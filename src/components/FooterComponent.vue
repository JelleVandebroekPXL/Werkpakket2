<script>
export default {
        data() {
            return {
               mail: "Mystery@Shirt.com",
               phone: "04 70 08 14 74"
            }
        }
    }
</script>

<template>
    <footer>
        <div class="footer-logo">
            <img src="src/assets/logo.png">
            <div class="footer-social-media">
                <ul class="social-media">
                    <li class="social-media-item">
                        <a href="#" class="social-media-link">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="#" class="social-media-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="#" class="social-media-link">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="#" class="social-media-link">
                            <i class="fab fa-snapchat"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="#" class="social-media-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div> 
        </div> 
        <div class="footer-mail">
                <i class="fa-regular fa-envelope"></i>
                <p>{{ mail }}</p>    
        </div>
        <div class="footer-phone">
            <i class="fa-solid fa-phone"></i>
            <p>{{ phone }}</p>    
        </div>
    </footer>
</template>