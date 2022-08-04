<template>
<nav  class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
  <div class="w1440 navwrap">
    <div class="logo">
      
    </div>
    <ul id="navi" class="navi" :class="{ 'navbar--hidden': !showNavbar }">
      <li v-on:click="gotointro">MAIN</li>
      <li v-on:click="gotoabout">ABOUT</li>
      <li v-on:click="gotoproblem">PROBLEM</li>
      <li v-on:click="gotoseed">SEED</li>
      <li v-on:click="gotoinsta">INSTA</li>
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
  mounted () {
    window.addEventListener('scroll', this.onScroll);
    const btn_h = document.getElementById('btn_ham')
    
    btn_h.addEventListener("click",function(){
      const nav = document.querySelector('.navi')
      nav.classList.toggle('active');
    })
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
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
 
</style>
