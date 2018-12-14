<template>
  <div>
    <HeaderNav/>
    <div class="skills_top">
      <div class="skills_welcome" :class="$mq">
        <!-- <img src='../assets/mountain_left.svg' alt=""> -->
        <h1>Skills</h1>
        <!-- <img src='../assets/mountain_right.svg' alt=""> -->
      </div>
      <div class="mountains">
        <img src="../assets/mountain_left.svg" alt>
        <img src="../assets/mountain_right.svg" alt>
      </div>
    </div>
    <div class="skills_text" :class="$mq">
      <!-- <h1>Here's what I've been working on.</h1> -->
        <a name="skills"><div class="tech">
        <img src='../assets/html-5.svg' alt="">
        <img src='../assets/css.svg' alt="">
        <img src='../assets/javascript.svg' alt="">
        <img src='../assets/react.svg' alt="">
        <img src='../assets/nodejs.svg' alt="">
      <img src='../assets/github.svg' alt="">
    </div></a>
      <p>I have experience with HTML, CSS, and Javascript. At DevMountain (the bootcamp I attended), I built two projects with React, Node.js, PostgreSQL, and Express. I also designed and built this very portfolio with Vue.js. There are a lot of languages I haven't got to yet, but I'm excited to learn.</p>
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
import HeaderNav from "../components/HeaderNav";
export default {
  name: "Skills",
  components: {
    HeaderNav: HeaderNav
  }
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Questrial");
@import url("https://fonts.googleapis.com/css?family=Antic+Slab");

* {
  margin: 0;
}

.skills_top {
  background-color: #f6fafc;
  padding-top: 16vh;
}

.skills_welcome {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  background-color: #f6fafc;
  font-family: "Antic Slab", serif;
  font-size: 28px;
  letter-spacing: 0.8px;
}

.skills_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 400px; */
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 80px;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
  letter-spacing: 0.6px;
}

.skills_text h1 {
  margin-bottom: 20px;
}

.tech {
  margin-top: 60px;
}

.tech img {
  height: 60px;
  margin: 20px;
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
  letter-spacing: 0.8px;
  margin-bottom: 20px;
}

footer p {
  margin-bottom: 20px;
  font-family: "Questrial", sans-serif;
  line-height: 24px;
  letter-spacing: 0.6px;
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

.skills_welcome.sm h1 {
  font-size: 46px;
}

.skills_text.sm {
  margin-right: 14%;
  margin-left: 14%;
}

.skills_text.sm h1 {
  line-height: 34px;
}

footer.sm p {
  margin-right: 14%;
  margin-left: 14%;
}

/* Medium media query */

.skills_text.md {
  margin-right: 14%;
  margin-left: 14%;
}

.skills_text.md h1 {
  line-height: 34px;
}

footer.md p {
  margin-right: 20%;
  margin-left: 20%;
}

/* Large media query */

.skills_text.lg {
  margin-right: 28%;
  margin-left: 28%;
}

.skills_text.lg h1 {
  line-height: 34px;
}

footer.lg p {
  margin-right: 35%;
  margin-left: 35%;
}
</style>
