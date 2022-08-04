<template>
  <div class="section">
    <div class="w1440 subtitle">
      <h1>ABOUT</h1>
    </div>
    <div class="w1240 subpg">
      <article v-for="intro in intros" v-bind:key="intro.title">
        <div class="subtitle_m">
          <div class="textbox">
            <h1>
              <span>{{intro.title}}</span>
            </h1>
          </div>
          <div class="textbox">
            <h2>
              <span>{{intro.subt}}</span>
            </h2>
          </div>
        </div>
        <div class="divbox">
          <div class="imgbox">
            <img :src="intro.img1" alt="{{intro.art1}}">
          </div>
          <div class="div_textbox">
            <p>{{intro.subscribe1}}</p>
            <p>{{intro.subscribe2}}</p>
            <p>{{intro.subscribe3}}</p>
            <p>{{intro.subscribe4}}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
  data () {
  return {    
    intros:[
      {
        title : "'지속가능한발전' 에 참여합니다",
        subt : "We Hope Sustainable Development",
        img1 : "./img/sustainable.jpg",
        art1 : "지속가능한발전에대한 UN의 목표",
        subscribe1 :"살아가는데 필요한 환경을 유지하고",
        subscribe2 :"지속 가능한 생산 방법으로 경제 발전을 달성하며",
        subscribe3 :"사회적 평화와 인권, 자유, 평등을 보장하며",
        subscribe4 :"정의롭고 민주적인 사회 실현을 지향합니다"
      },
      {
        title : "'업사이클링' 에 참여합니다",
        subt : "We Hope UP-cycling",
        img1 : "./img/upcycling.png",
        art1 : "지속가능한발전에대한 UN의 목표",
        subscribe1 :"재활용의 Re-cycling을 넘어서",
        subscribe2 :"가치를 재생산 하는 Up-cycling에 동참합니다",
        subscribe3 :"우리의 중요한 과제인 환경 보호와 함께",
        subscribe4 :"새로운 가치를 만들어 가는 다양성을 지향합니다"
      }
    ]
  }
  },
  mounted () {
    (function() {
	const outputElem = document.querySelector('.output');
	const imageElem = document.querySelector('.image');

	function showValue() {
		let posY = imageElem.getBoundingClientRect().top;
		outputElem.innerHTML = posY;

		if (posY < window.innerHeight * 0.2) {
			imageElem.classList.add('zoom');
		}
        
		else {
			imageElem.classList.remove('zoom');
		}
	}

	window.addEventListener('scroll', function() {
		showValue();
	});

})();
  }
}
</script>