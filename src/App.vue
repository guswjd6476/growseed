<template>
<nav  class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
  <div class="w1440 navwrap">
    <div class="logo">
      <img src="../public/img/logo/logo.png" alt="">
    </div>
    <ul id="navi" class="navi" :class="{ 'navbar--hidden': !showNavbar }" >
      <li v-on:click="gotointro">MAIN</li>
      <li v-on:click="gotoabout">ABOUT</li>
      <li v-on:click="gotoproblem">PROBLEM</li>
      <li v-on:click="gotoseed">SEED</li>
      <li v-on:click="gotoinsta">INSTAGRAM</li>
    </ul>
    <div id="btn_ham"  class="btn_ham">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>
  <intro id="intro"></intro>
  <about id="about"></about>
  <nature id="nature"></nature>
  <seed id="seed"></seed>
  <insta id="insta"></insta>
<footer>
  <div class="w1440 textbox">
    <p>Copyrightⓒ2022. growseed. All rights reserved.</p>
    <p>본 사이트는 상업적 목적이 아닌 사이트로 제작되었습니다.</p>
  </div>
</footer>
</template>

<script>
import intro from './components/intro.vue'
import about from './components/about.vue'
import nature from './components/nature.vue'
import seed from './components/seed.vue'
import insta from './components/insta.vue'

export default {
  name: 'App',
  data () {
    return {
     showNavbar: true,
      lastScrollPosition: 0
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
     window.addEventListener('scroll', this.onScroll);
    const btn_h = document.getElementById('btn_ham')
    
    btn_h.addEventListener("click",function(){
      const nav = document.querySelector('.navi')
      nav.classList.toggle('active');
    })

// const content = document.querySelector('.content');
// const nav = document.querySelector('.navbar');

// // 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
// const contentTop = content.getBoundingClientRect().top + window.scrollY;

// window.addEventListener('scroll', function(){
//   if(window.scrollY > contentTop + 60){
//     nav.classList.add('navcolor');
//   }else{
//     nav.classList.remove('navcolor');
//   }
// });

  },
  
  methods: {
    
    gotointro() {
      const intro = document.getElementById('intro')
      if(intro){
        intro.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoabout() {
      const about = document.getElementById('about')
      if(about){
        about.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproblem() {
      const nature = document.getElementById('nature')
      if(nature){
        nature.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoseed() {
      const seed = document.getElementById('seed')
      if(seed){
        seed.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoinsta() {
      const insta = document.getElementById('insta')
      if(insta){
        insta.scrollIntoView({behavior : 'smooth'})

      }
    },    
    onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
  },
  components: {
    intro,
    about,
    nature,
    seed,
    insta,
  },
  
}
</script>

<style>
 
#app{
    font-family: 'Noto Sans KR', sans-serif;
}
*{
    box-sizing: border-box;
}
</style>
