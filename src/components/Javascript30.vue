<template>
  <div>
    <HeaderNav/>
    <div class="js30_top">
      <div class="js30_welcome" :class="$mq">
        <!-- <img src='../assets/mountain_left.svg' alt=""> -->
        <h1>Javascript 30</h1>
        <!-- <img src='../assets/mountain_right.svg' alt=""> -->
      </div>
      <div class="mountains">
        <img src="../assets/mountain_left.svg" alt>
        <img src="../assets/mountain_right.svg" alt>
      </div>
    </div>
    <div class="js30_text" :class="$mq">
      <h1>Building things in Vanilla Javascript</h1>
      <p>One of my ongoing development goals is to become better at Javascript. What you see below is my take on Wes Bos' 30 Day Vanilla Javascript Coding Challenge. Click through to see each one live. </p>
    </div>
        <div class="js30projects" :class="$mq">
            <div class="js30grid" :class="$mq">
                <div class="drumkit" :class="mq">
                    <a href="https://nathanblairjs30-drumkit.netlify.com/" target="blank"><img src="../assets/js30drumkit.png" alt></a>
                    <a href="https://nathanblairjs30-drumkit.netlify.com/" target="blank"><div class="overlay" :class="mq"><h2>Drumkit</h2></div></a>
                </div>
                <div class="clock">
                    <a href="https://nathanblairjs30-clock.netlify.com/" target="blank"><img src="../assets/js30clock.png" alt></a>
                    <a href="https://nathanblairjs30-clock.netlify.com/" target="blank"><div class="overlay"><h2>Clock</h2></div></a>
                </div>
                <div class="cssvariables">
                    <a href="https://nathanblairjs30-css-variables.netlify.com/" target="blank"><img src="../assets/js30cssvar.png" alt></a>
                    <a href="https://nathanblairjs30-css-variables.netlify.com/" target="blank"><div class="overlay"><h2>CSS Variables</h2></div></a>
                </div>
            </div>
        </div>
    <a name="contact">
      <footer :class="$mq">
        <h1>Contact Me.</h1>
        <p>Click on the envelope to send me an email. You can find me on LinkedIn and GitHub too.</p>
        <div class="social">
          <a href="https://www.linkedin.com/in/nathanblair/" target="blank">
            <img src="../assets/linkedin-logoo.svg" alt>
          </a>
          <a href="https://github.com/nathanburrblair" target="blank">
            <img src="../assets/github-logoo.svg" alt>
          </a>
          <a href="mailto:nathanburrblair@gmail.com">
            <img src="../assets/close-envelop.svg" alt>
          </a>
        </div>
        <!-- <p>© 2018 Nathan Blair. All rights reserved.</p> -->
      </footer>
    </a>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav'
export default {
  name: 'Work',
  components: {
    HeaderNav: HeaderNav
  }
}
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Questrial");
@import url("https://fonts.googleapis.com/css?family=Antic+Slab");

* {
  margin: 0;
}

.js30grid {
    display: grid;
    height: auto;
    max-width: 80%;
    grid-template-columns: repeat(3, 1fr);
}

.overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    content: '\A';
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s ease-in-out;
}

.drumkit,
.clock,
.cssvariables {
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
}

.drumkit img,
.clock img,
.cssvariables img {
   display: block;
   width: 100%;
}

.drumkit:hover .overlay,
.clock:hover .overlay,
.cssvariables:hover .overlay {
    opacity: 1;
  }

.js30_top {
  background-color: #f6fafc;
  padding-top: 16vh;
}

.js30_welcome {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  background-color: #f6fafc;
  font-family: "Antic Slab", serif;
  font-size: 28px;
}

.js30_hero {
  background-color: #f6fafc;
  max-width: 800px;
  margin: 0 auto;
}

.js30_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-right: 30%;
  margin-left: 30%;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
}

.js30_text h1 {
  margin-bottom: 20px;
}

.mountains {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.mountains img {
  width: 100%;
  max-height: 200px;
  max-width: 50%;
}

.js30projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ;
  padding: 0 10% 60px 10%;
  height: auto;
}

.js30projects img {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

footer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6fafc;
}

footer h1 {
  font-family: "Antic Slab", serif;
  font-size: 46px;
  margin-bottom: 20px;
}

footer p {
  margin-bottom: 20px;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
}

footer img {
  height: 40px;
  margin: 5px;
}

.social {
  display: flex;
  margin-bottom: 20px;
}

/* Small media query */

.js30grid.sm {
    display: grid;
    height: auto;
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
}

.js30_welcome.sm h1 {
  font-size: 46px;
}

.js30_text.sm {
  margin-right: 10%;
  margin-left: 10%;
}

.js30_text.sm h1 {
  line-height: 34px;
}

footer.sm p {
  margin-right: 14%;
  margin-left: 14%;
}

/* Medium media query */

.js30grid.md {
    display: grid;
    height: auto;
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

.js30_text.md {
  margin-right: 14%;
  margin-left: 14%;
}

.js30_text.md h1 {
  line-height: 34px;
}

footer.md p {
  margin-right: 20%;
  margin-left: 20%;
}

/* Large media query */

.js30grid.lg {
    display: grid;
    height: auto;
    max-width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.js30_text.lg {
  margin-right: 28%;
  margin-left: 28%;
}

.js30_text.lg h1 {
  line-height: 34px;
}

footer.lg p {
  margin-right: 35%;
  margin-left: 35%;
}
</style>
