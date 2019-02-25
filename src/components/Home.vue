<template>
  <div>
    <HeaderNav/>
    <div class="top">
      <div class="welcome" :class="$mq">
        <h1>Hi. I'm Nathan.</h1>
        <p>A search marketer and web developer</p>
      </div>
      <div class="hero">
        <img src="../assets/MountainHome.svg" alt>
      </div>
    </div>
    <div class="body_text" :class="$mq">
      <!-- <h1>This is me.</h1> -->
      <!-- <img src='../assets/headshotsvg.svg' alt=""> -->
      <img src="../assets/headshotsquare.svg" alt>
      <p>I'm a search marketer / web developer based in Salt Lake City, Utah. I've spent the last decade working in SEO and digital marketing, and recently I've learned how build websites with the PERN stack. When I'm not in front of my computer, you might find me exploring the Wasatch, riding a bike, or reading a good book.</p>
    </div>
    <!-- <div class='dots' :class="$mq"></div> -->
    <a name="skills"><div class="experience">
    <div class="seo_text" :class="$mq">
      <img src="../assets/browserr.svg" alt>
      <p>Over the course of my career, I've managed a lot of search marketing campaigns. I'm experienced in keyword research, competitive analysis, on-site and off-site optimization, and content marketing. My experience in technical SEO led me to explore web development, which has proved to be an exciting and challenging process.</p>
    </div>
    </div></a>
    <div class="body_text_2" :class="$mq">
      <img src="../assets/chat.svg" alt>
      <p>I have experience with HTML, CSS, and Javascript. I've built projects with React, Node.js, PostgreSQL, and Express. I also designed and built this very portfolio with Vue.js. Web development is such an exciting field. My intention is to continue learning, exploring, and building cool things along the way.</p>
      <router-link to="/work">
        <button>See My Work</button>
      </router-link>
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
        <!-- <router-link to="/"><p>Home</p></router-link> -->
      </footer>
    </a>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav'
export default {
  name: 'Home',
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

.top {
  background-color: #f6fafc;
  padding-top: 16vh;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f6fafc;
  font-family: "Antic Slab", serif;
  font-size: 28px;
}

.welcome p {
  margin: 20px;
  font-family: "Questrial", sans-serif;
  font-size: 24px;
}

.hero {
  background-color: #f6fafc;
  max-width: 800px;
  margin: 0 auto;
}

.hero img {
  width: 100%;
}

.body_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30%;
  margin-left: 30%;
  margin-top: 60px;
  padding-bottom: 20px;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 45%;
  margin-left: 45%;
  border-bottom: 5px dotted #2c3e50;
}

.body_text h1 {
  margin-bottom: 20px;
}

.body_text img {
  height: 90px;
  width: 90px;
  margin-bottom: 24px;
}

.body_text_2 img {
  height: 80px;
  margin-bottom: 24px;
}

.body_text_2, .seo_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 60px;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
}

.body_text_2 h1, .seo_text h1 {
  margin-bottom: 20px;
}

.body_text_2 button, .seo_text button {
  color: #fff;
  font-family: "Questrial", sans-serif;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 20px 40px 20px 40px;
  margin-top: 40px;
  border-radius: 3px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #62a295;
  border: none;
}

.experience {
  margin-top: 40px;
}

.seo_text img {
  height: 80px;
  margin-bottom: 24px;
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

.welcome.sm h1 {
  font-size: 46px;
}

.body_text.sm {
  margin-right: 14%;
  margin-left: 14%;
}

.body_text_2.sm, .seo_text.sm {
  margin-right: 14%;
  margin-left: 14%;
}

footer.sm p {
  margin-right: 14%;
  margin-left: 14%;
}

/* Medium media query */

.body_text.md {
  margin-right: 20%;
  margin-left: 20%;
}

.body_text_2.md, .seo_text.md {
  margin-right: 20%;
  margin-left: 20%;
}

.dots.md {
  margin-right: 48%;
  margin-left: 48%;
}

footer.md p {
  margin-right: 20%;
  margin-left: 20%;
}

/* Large media query */

.body_text.lg {
  margin-right: 30%;
  margin-left: 30%;
}

.body_text_2.lg, .body_text.lg {
  margin-right: 30%;
  margin-left: 30%;
}

.dots.lg {
  margin-right: 48%;
  margin-left: 48%;
}

footer.lg p {
  margin-right: 35%;
  margin-left: 35%;
}
</style>
