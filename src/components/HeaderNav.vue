<template>
    <div id='nav'>
        <div>
            <router-link to='/'><h1>n.b.</h1></router-link>
        </div>
        <div>
            <ol>
                <li>About</li>
                <router-link to='/work'><li>Work</li></router-link>
                <li>Contact</li>
            </ol>
        </div>
    </div>
</template>

<script>

var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
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

<style>
    @import url('https://fonts.googleapis.com/css?family=Questrial');
    @import url('https://fonts.googleapis.com/css?family=Antic+Slab');
    #nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: 'Questrial', sans-serif;
        background-color: #F6FAFC;
        width: 100%;
        height: 16vh;
        position: fixed;
        top: 0;
        transition: top 0.4s;
    }

    #nav img {
        width: 50px;
        height: 50px;
    }

    #nav h1 {
        font-family: 'Antic Slab', serif;
        font-size: 48px;
    }

    ol {
        display: flex;
        justify-content: space-around;
        width: 30vw;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: #2c3e50;
    }

    a:visited {
        color: #2c3e50;
    }
</style>
