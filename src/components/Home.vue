<template>
<div>
    <HeaderNav />
    <div class="top">
        <div class="welcome">
            <h1>Hi. I'm Nathan.</h1>
            <p>A web developer</p>
        </div>
        <div class='hero'>
            <img src="../assets/MountainHome.svg" alt="">
        </div>
    </div>
    <div class="body_text">
        <h1>This is me.</h1>
        <p>I'm a web developer based in Salt Lake City, Utah. After spending the last decade working in SEO and digital marketing, I decided to start something new. I have a good eye for design and I'm eager to learn more and continously imporove. Take a look at my Work page to see what I've built so far.</p>
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
  name: 'Home',
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

    .top {
        background-color: #F6FAFC;
        padding-top: 16vh;

    }

    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        background-color: #F6FAFC;
        font-family: 'Antic Slab', serif;
        font-size: 28px;
        letter-spacing: .8px;
    }

    .welcome p {
        margin: 20px;
        font-family: 'Questrial', sans-serif;
        font-size: 24px;
    }

    .hero {
        background-color: #F6FAFC;
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
        height: 300px;
        margin-right: 30%;
        margin-left: 30%;
        font-family: 'Questrial', sans-serif;
        line-height: 24px;
        letter-spacing: .6px;
    }

    .body_text h1 {
        margin-bottom: 20px;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20vh;
        background-color: #F6FAFC;
    }

    footer p {
        margin-bottom: 20px;
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
        margin: 20px;
    }
</style>
