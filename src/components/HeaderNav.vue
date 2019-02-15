<template>
    <div id='nav'>
        <div class='nav_container'>
            <div>
                <router-link to='/'><h1>n.b.</h1></router-link>
            </div>
            <div>
                <ol class="nav_list" :class="$mq">
                    <router-link to='/'><li>About</li></router-link>
                    <router-link to='/work'><li>Work</li></router-link>
                    <router-link to='/skills'><li>Skills</li></router-link>
                    <a href="#contact"><li>Contact</li></a>
                    <!-- <a href="mailto:nathanburrblair@gmail.com"><li>Contact</li></a> -->
                </ol>
            </div>
        </div>
    </div>
</template>

<script>

// pageYOffset increases as you scroll down the page
var prevScrollpos = window.pageYOffset
console.log('previous', prevScrollpos)
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  console.log('current', currentScrollPos)
  if (30 > currentScrollPos) {
    document.getElementById('nav').style.top = '0'
  } else {
    document.getElementById('nav').style.top = '-16vh'
  }
  prevScrollpos = currentScrollPos
}

export default {
  name: 'HeaderNav'
}
</script>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css?family=Questrial');
    @import url('https://fonts.googleapis.com/css?family=Antic+Slab');

    #nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Questrial', sans-serif;
        background-color: #F6FAFC;
        width: 100%;
        height: 16vh;
        position: fixed;
        top: 0;
        transition: top 0.4s;
    }

    #nav h1 {
        font-family: 'Antic Slab', serif;
        font-size: 48px;
    }

    .nav_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-right: 5%;
        margin-left: 7%;
    }

    .nav_list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 30vw;
        margin-right: 10px;
        margin-left: 10px;
    }

    li {
        list-style-type: none;
        margin-right: 7px;
        margin-left: 7px;
    }

    a {
        text-decoration: none;
        color: #2c3e50;
    }

    a:visited {
        color: #2c3e50;
    }

    /* Small media query */

    .nav_list.sm {
        width: 47vw;
    }

    /* Large Media Query */

    .nav_list.lg {
        width: 20vw;
    }
</style>
