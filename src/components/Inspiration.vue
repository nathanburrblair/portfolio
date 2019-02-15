<template>
  <div>
    <HeaderNav/>
    <div class="inspiration_top">
      <div class="inspiration_welcome" :class="$mq">
        <h1>Inspiration</h1>
      </div>
      <div class="mountains">
        <img src="../assets/mountain_left.svg" alt>
        <img src="../assets/mountain_right.svg" alt>
      </div>
    </div>
    <!-- <div class="inspiration_text" :class="$mq">
      <h1>I don't know what I'll put here</h1>
      <p>I'll probably include something here but I don't know what yet. </p>
    </div> -->
    <div class="right_attitude">
      <!-- <img src="../assets/work-roasted.png" alt> -->
      <div class="right_attitude_text" :class="$mq">
        <h2>Right Attitude</h2>
        <!-- <h3>Some subtext I may not actually need</h3> -->
        <p>When you can sit with your whole body and mind, and with the oneness of your mind and body under the control of the universal mind, you can easily attain this kind of right understanding. Your everyday life will be renewed without being attached to an old erroneous interpretation of life. When you realize this fact, you will discover how meaningless your old interpretation was, and how much useless effort you had been making. You will find the true meaning of life, and even though you have difficulty falling upright from the top of the waterfall to the bottom of the mountain, you will enjoy your life.</p>
        <p>- Shunryu Suzuki</p>
      </div>
    </div>
        <div class="cosmos">
      <!-- <img src="../assets/work-roasted.png" alt> -->
      <div class="right_attitude_text" :class="$mq">
        <h2>Cosmos</h2>
        <!-- <h3>Some subtext I may not actually need</h3> -->
        <p>The Cosmos extends, for all practical purposes, forever. After a brief sedentary hiatus, we are resuming our ancient nomadic way of life. Our remote descendants, safely arrayed on many worlds throughout the Solar System and beyond, will be unified by their common heritage, by their regard for their home planet, and by the knowledge that, whatever other life may be, the only humans in all the Universe come from Earth. They will gaze up and strain to find the blue dot in their skies. They will love it no less for its obscurity and fragility. They will marvel at how vulnerable the repository of all our potential once was, how perilous our infancy, how humble our beginnings, how many rivers we had to cross before we found our way.</p>
        <p>- Carl Sagan</p>
      </div>
    </div>
    <a name="contact">
      <!-- <footer :class="$mq">
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
        <p>© 2018 Nathan Blair. All rights reserved.</p>
      </footer> -->
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

.inspiration_top {
  background-color: #f6fafc;
  padding-top: 16vh;
}

.inspiration_welcome {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  background-color: #f6fafc;
  font-family: "Antic Slab", serif;
  font-size: 28px;
}

.inspiration_text {
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

.inspiration_text h1 {
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

/* Right Attitude */

.right_attitude {
  padding: 80px 10% 80px 10%;
}

.right_attitude img {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.right_attitude_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: #fff; */
  font-family: "Questrial", sans-serif;
  line-height: 26px;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 40px;
}

.right_attitude_text h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.right_attitude_text p {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
  font-size: 18px;
  line-height: 28px;
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

/* Cosmos */

.cosmos {
    padding: 80px 10% 80px 10%;
    background-color:#F6FAFC;
}

/* Small media query */

.inspiration_welcome.sm h1 {
  font-size: 46px;
  margin-bottom: 60px;
}

.inspiration_text.sm {
  margin-right: 14%;
  margin-left: 14%;
}

.inspiration_text.sm h1 {
  line-height: 34px;
}

.right_attitude_text.sm {
  margin-right: 2%;
  margin-left: 2%;
}

footer.sm p {
  margin-right: 14%;
  margin-left: 14%;
}

/* Medium media query */

.inspiration_text.md {
  margin-right: 14%;
  margin-left: 14%;
}

.inspiration_text.md h1 {
  line-height: 34px;
}

.right_attitude_text.md {
  margin-right: 2%;
  margin-left: 2%;
}

footer.md p {
  margin-right: 20%;
  margin-left: 20%;
}

/* Large media query */

.inspiration_text.lg {
  margin-right: 28%;
  margin-left: 28%;
}

.inspiration_text.lg h1 {
  line-height: 34px;
}

.right_attitude_text.lg {
  margin-right: 22%;
  margin-left: 22%;
}

footer.lg p {
  margin-right: 35%;
  margin-left: 35%;
}
</style>
