<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
        remember: "Onthoud mij",
               password: "Wachtwoord vergeten",
               welkom: "Welkom",
               uitloggen: "Uitloggen",
               quotes: [
                { id: 1, name: 'Johan Cruyff', text: '"Playing football is very simple, but playing simple football is the hardest thing there is."'},
                { id: 2, name: 'Ronaldinho', text: '"I learned all about life with a ball at my feet."'},
                { id: 3, name: 'Pelé', text: '"The more difficult the victory, the greater the happiness in winning."'},
                { id: 4, name: 'Ronaldinho', text: '"It’s not just about the money, it’s about what you achieve on the pitch."'},
                { id: 5, name: 'Neymar Jr.', text: '"There is no pressure when youre making a dream come true."'},
                { id: 6, name: 'Tony Adams', text: '"Play for the badge on the front of the shirt and they’ll remember the name on the back.”'},
                { id: 7, name: 'Arsene Wenger', text: '“If you do not believe you can do it, then you have no chance at all.”'},
                { id: 8, name: 'Dennis Bergkamp', text: '“Behind every kick of a ball, there has to be a thought.”'},
                { id: 9, name: 'Andrea Pirlo', text: '“Football is played with your head. Your feet are just the tools.”'},
                { id: 10, name: 'Sir Alex Ferguson', text: '“I’ve never played for a draw in my life.”'},
                { id: 11, name: 'Robert Lewandowski', text: '"In football, the greatest satisfaction is winning when they say you can’t."'},
                { id: 12, name: 'Thierry Henry', text: '"If you’re not playing with passion, then you’re not playing football."'},
                { id: 13, name: 'Gary Lineker', text: '"Football is a simple game; 22 men chase a ball for 90 minutes, and at the end, the Germans always win."'},
                { id: 14, name: 'Bobby Robson', text: '“The first 90 minutes are the most important.”'},
                { id: 15, name: 'Bobby Robson', text: '"We didn’t underestimate them. They were just a lot better than we thought”'},
                { id: 16, name: 'Didier Drogba', text: '"Football is more than just a game. It can bring hope and joy to people’s lives."'},
                { id: 17, name: 'Carlo Ancelotti', text: '"Football is the most important of the less important things in the world."'},
                { id: 18, name: 'Mia Hamm', text: '“Every single day, I wake up and commit myself to becoming a better player.”'},
                { id: 19, name: 'Sam Kerr', text: '“No one is bigger than the team, you win together, and you can certainly lose together.”'},
                { id: 20, name: 'Diego Maradona', text: '"If you want to score a goal, you have to have the ball."'},
                { id: 21, name: 'Pep Guardiola', text: '"Football is a matter of the mind, not the legs."'},
                { id: 22, name: 'Marco Van Basten', text: 'Just pass me the ball and let’s celebrate.'},
                { id: 23, name: 'Zinedine Zidane', text: '"I am the happiest man when I am on the field."'},
                { id: 24, name: 'Bill Shankly', text: '"Some people think football is a matter of life and death. I assure you, it’s much more serious than that."'},
                { id: 25, name: 'Thierry Henry', text: '"I always say that you need to enjoy the journey, not only the destination."'},
                { id: 26, name: 'David Beckham', text: '"I am a footballer, that is where I am comfortable, that is where I am most happy. But I am also a father."'},
                { id: 27, name: 'Lukas Podolski', text: '"Football is like chess, but without dice."'},
                { id: 28, name: 'Paolo Maldini', text: '"If you haven’t suffered, you haven’t lived."'},
                { id: 29, name: 'Josef Herberger', text: '"The ball is round, the game lasts 90 minutes, and anything can happen." '},
                { id: 30, name: 'Thierry Henry', text: '"Sometimes you win, sometimes others lose."'},
                { id: 31, name: 'Vujadin Boskov', text: '"Football is love at first sight."'},
                { id: 32, name: 'Zlatan Ibrahimovic', text: '"If you don’t believe in yourself, who will?"'},
                { id: 33, name: 'Vince Lombardi', text: '"Winning isn’t everything, but wanting to win is." '},
                { id: 34, name: 'Johan Cruyff', text: '"Football is a game of mistakes, and the team that makes the fewest mistakes wins."'},
                { id: 35, name: 'Ronaldinho', text: '"Football is a universal language."'},
                { id: 36, name: 'Bobke Peeters', text: '"Then you know it’s gonna be difficult"'},
                { id: 37, name: 'Jose Mourinho', text: '"If I speak i’m in big trouble, big big trouble"'}
                ],
                randomIndex: Math.floor(Math.random() * 37),
                loggedIn: false
    
    };
  },
  methods: {
    login() {
      const validUsername = 'jelle@mystery.be';
      const validPassword = 'voetbal';

      if (this.user.username === validUsername && this.user.password === validPassword) {
        this.loggedIn = true;
        localStorage.setItem('loggedIn', 'true');
        alert('Je bent nu ingelogd!');
      } else {
        console.error('Ongeldige inloggegevens', this.user.username, this.user.password);
        alert('Ongeldige inloggegevens');
      }
    },
    logout() {
      this.loggedIn = false;
      localStorage.setItem('loggedIn', 'false');
      alert('Je bent nu uitgelogd!');
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


const LOGGED_IN_TRUE = 'true';
const LOGGED_IN_FALSE = 'false';

// ...

// Inloggen
localStorage.setItem('loggedIn', LOGGED_IN_TRUE);

// Uitloggen
localStorage.setItem('loggedIn', LOGGED_IN_FALSE);
</script>

<template>
    <section class="login">
        <div class="login-icon">
            <i class="fa-solid fa-right-to-bracket"></i>
        </div>
        <div class="login-main">
            <div class="username">
                <label for="username">
                    <i class="fa-solid fa-user"></i>
                </label>
                <input v-model="user.username" type="text" id="username" name="username" required>
            </div>
            <div class="password">
                <label for="password">
                    <i class="fa-solid fa-lock"></i>
                </label>
                <input v-model="user.password" type="password" id="password" name="password" required>
            </div>
            <div class="remember-and-password">
                <div class="remember-me">
                    <label>
                        <input type="checkbox" id="remember" name="remember">
                        {{ this.remember }}
                    </label>
                </div>
                <div class="forgot-password">
                    <a href="#">
                        {{ this.password }}
                    </a>
                </div>
            </div>
        </div>
        <div class="login-sub">
            <button v-if="!loggedIn" type="button" class="login-sub-text" @click="login">{{ this.welkom }}</button>
            <button v-else type="button" class="login-sub-text" @click="logout">{{ this.uitloggen }}</button>
        </div>
        <div class="login-text">
            <p class="login-text-quote">{{ this.quotes[this.randomIndex].text }}</p>
            <hr class="login-text-line">
            <p class="login-text-name">{{ this.quotes[this.randomIndex].name }}</p>
        </div>
    </section>
</template>