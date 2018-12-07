<template>
  <div>
    <HeaderNav />
       <div class="work_top">
        <div class="work_welcome">
            <!-- <img src='../assets/mountain_left.svg' alt=""> -->
            <h1>Work</h1>
            <!-- <img src='../assets/mountain_right.svg' alt=""> -->
        </div>
        <div class='mountains'>
            <img src='../assets/mountain_left.svg' alt="">
            <img src='../assets/mountain_right.svg' alt="">
        </div>
    </div>
    <div class="work_text" :class="$mq">
        <h1>Here's what I've been working on.</h1>
        <p>This is my most recent work. Each project below has a link to the live site and the GitHub repository.</p>
    </div>
    <div class='roasted'>
      <img src="../assets/work_roasted_phone_tablet.svg" alt="">
      <div class="roasted_text" :class="$mq">
        <h2>Roasted</h2>
        <h3>React / Redux / Node / Express / PostgreSQL</h3>
        <p>You know when you’re a coffee geek and you’re trying to remember that really good roast you had that one time but you can’t because you didn’t write down the name? I made Roasted for me, er ... that person, while I was studying at DevMountain.</p>

        <p>Roasted lets you check in and record your thoughts about what you’re drinking. There’s also a store where you can go through a checkout process. Roasted is a responsive, full stack app built with React.js. It was awarded “Best CSS” by DevMountain.</p>
      </div>
      <div class='roasted_buttons'>
        <a href='https://www.roastedstore.com' target='blank'><button class='roasted_website'>Visit Roasted</button></a>
        <a href='https://github.com/nathanburrblair/nathans-personal-project' target='blank'><button class='roasted_github'>GitHub Repo</button></a>
      </div>
    </div>
    <div class='devstack'>
      <img src="../assets/work_devstack.svg" alt="">
      <div class="devstack_text" :class="$mq">
        <h2>Dev Stack</h2>
        <h3>React / Redux / Node / Express / PostgreSQL</h3>
        <p>Dev Stack is an app where developers can connect with other developers. This project was a three person effort, where my responsibilities were mainly the homepage and much of the app design. It was built with React.js, Node.js, PostgreSQL, and Express.</p>
      </div>
      <div class='devstack_buttons'>
        <a href='https://dev-stack.org' target='blank'><button class='devstack_website'>Visit Dev Stack</button></a>
        <a href='https://github.com/dev-sm-app/dev-app' target='blank'><button class='devstack_github'>GitHub Repo</button></a>
      </div>
    </div>
    <footer>
        <div class='social'>
            <a href='https://www.linkedin.com/in/nathanblair/' target='blank'><img src='../assets/linkedin-logoo.svg' alt=""></a>
            <a href='https://github.com/nathanburrblair' target='blank'><img src='../assets/github-logoo.svg' alt=""></a>
            <a href="mailto:nathanburrblair@gmail.com"><img src='../assets/close-envelop.svg' alt=""></a>
        </div>
        <p>© 2018 Nathan Blair. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav'
export default {
  name: 'Work',
  components: {
    'HeaderNav': HeaderNav
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Questrial');
    @import url('https://fonts.googleapis.com/css?family=Antic+Slab');

    * {
        margin: 0;
    }

  .work_top {
        background-color: #F6FAFC;
        padding-top: 16vh;
    }

  .work_welcome {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        height: 200px;
        background-color: #F6FAFC;
        font-family: 'Antic Slab', serif;
        font-size: 28px;
        letter-spacing: .8px;
    }

     /* .work_welcome img {
      width: 100%;
      max-width: 400px;
    }

    .work_welcome h1 {
      margin-bottom: 170px;
    } */

    .work_hero {
        background-color: #F6FAFC;
        max-width: 800px;
        margin: 0 auto;
    }

    .work_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        margin-right: 30%;
        margin-left: 30%;
        font-family: 'Questrial', sans-serif;
        line-height: 24px;
        letter-spacing: .6px;
    }

    .work_text h1 {
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

  /* Roasted */

    .roasted {
      background-color: #806A5B;
      padding-top: 60px;
      padding-bottom: 60px;
      padding-left: 10%;
      padding-right: 10%;
    }

    .roasted img {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
    }

    .roasted_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: 'Questrial', sans-serif;
      line-height: 24px;
      letter-spacing: .6px;
      margin-right: 20%;
      margin-left: 20%;
      margin-top: 40px;
    }

    .roasted_text h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .roasted_text p {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    .roasted button {
      color: #fff;
      font-family: 'Questrial', sans-serif;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: .6px;
      text-transform: uppercase;
      padding: 20px 40px 20px 40px;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 3px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }

    .roasted_buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .roasted_website {
      background-color: #425055;
      border: none;
    }

    .roasted_website:focus {
      outline: 0;
    }

    .roasted_website:hover {
      background-color: #3E4A4F;
      cursor: pointer;
    }

    .roasted_website:active {
      transform: translateY(2px);
    }

    .roasted_github {
      background-color: #806A5B;
      border: 1px solid #fff;
    }

    .roasted_github:focus {
      outline: 0;
    }

    .roasted_github:hover {
      background-color: #756255;
      cursor: pointer;
    }

    .roasted_github:active {
      transform: translateY(2px);
    }

    /* Dev Stack */

    .devstack {
      background-color: #292929;
      padding-top: 60px;
      padding-bottom: 60px;
      padding-left: 10%;
      padding-right: 10%;
    }

    .devstack img {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
    }

    .devstack_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: 'Questrial', sans-serif;
      line-height: 24px;
      letter-spacing: .6px;
      margin-right: 20%;
      margin-left: 20%;
      margin-top: 40px;
    }

    .devstack_text h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .devstack_text p {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    .devstack button {
      color: #fff;
      font-family: 'Questrial', sans-serif;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: .6px;
      text-transform: uppercase;
      padding: 20px 40px 20px 40px;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 3px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }

    .devstack_buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .devstack_website {
      background-color: #00A4F3;
      border: none;
    }

    .devstack_website:focus {
      outline: 0;
    }

    .devstack_website:hover {
      background-color: #0198E1;
      cursor: pointer;
    }

    .devstack_website:active {
      transform: translateY(2px);
    }

    .devstack_github {
      background-color: #292929;
      border: 1px solid #fff;
    }

    .devstack_github:focus {
      outline: 0;
    }

    .devstack_github:hover {
      background-color: #1E1E1E;
      cursor: pointer;
    }

    .devstack_github:active {
      transform: translateY(2px);
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* height: 20vh; */
        background-color: #F6FAFC;
    }

    footer p {
        margin-bottom: 60px;
        color: #83919f;
        font-family: 'Questrial', sans-serif;
        line-height: 24px;
        letter-spacing: .6px;
    }

    footer img {
        height: 30px;
        margin: 5px;
    }

    .social {
        display: flex;
        margin-top: 60px;
    }

    /* Small media query */

    .work_text.sm {
      margin-right: 14%;
      margin-left: 14%;
    }

    .work_text.sm h1 {
      line-height: 34px;
    }

    .roasted_text.sm {
      margin-right: 2%;
      margin-left: 2%;
    }

    .devstack_text.sm {
      margin-right: 2%;
      margin-left: 2%;
    }

    /* Medium media query */

    .work_text.md {
      margin-right: 14%;
      margin-left: 14%;
    }

    .work_text.md h1 {
      line-height: 34px;
    }

    .roasted_text.md {
      margin-right: 2%;
      margin-left: 2%;
    }

    .devstack_text.md {
      margin-right: 2%;
      margin-left: 2%;
    }

    /* Large media query */

    .work_text.lg {
      margin-right: 28%;
      margin-left: 28%;
    }

    .work_text.lg h1 {
      line-height: 34px;
    }

    .roasted_text.lg {
      margin-right: 22%;
      margin-left: 22%;
    }

    .devstack_text.lg {
      margin-right: 22%;
      margin-left: 22%;
    }
</style>
