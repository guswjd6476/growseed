<template>
  <div class="section content">
    <div class="w1440 subtitle">
      <h1>PROMBLEM</h1>
    </div>
      <div class="subpg ">
          <div class="problembox" v-for="problem in problems" v-bind:key="problem.title">
            <div class="bancon">
              <div class="w1240 banimg plr">
                <div class="imgbox">
                  <img :src="problem.img1" alt="{{problem.art1}}">
                </div>
              </div>
              <div class="bantext" :style="{'background-color':problem.backcolor}">
                <div class="w1240 plr textbox">
                  <strong>
                    <span :style="{'color':problem.fontcolor}">{{problem.name}} : {{problem.name_sub}}</span>
                  </strong>
                </div>
              </div>
            </div>
            <div class="w1240 subscribe plr">
              <h4>{{problem.subt1}}</h4>
              <p>{{problem.subm1}}</p>
              <p>{{problem.subm2}}</p>
              <h6>{{problem.subt2}}</h6>
              <p>{{problem.subm3}}</p>
            </div>
          </div>  
        <div class="w1240 onebox">
          <div class="imgbox">
            <img src="../../public/img/problem/gorwseed.jpg" alt="">
          </div>
          <div class="textbox plr">
            <h1>
              <span>GROW SEED 가 가진 과제</span>
            </h1>
          </div>
          <div class="subscribe plr">
            <h6>1. 지속가능한 발전을 위한 일상생활에서 가능한 UP-CYCLING</h6>
            <p>플라스틱을 화분으로 만드는 작업을 통해 일상생활에서 만들어 나갈수 있는 UP-CYCLING을 실행합니다</p>
            <h6>2. 환경문제에 대한 개선을 목표하는 소극적 참여와 적극적 참여</h6>
            <p>한알의 씨앗을 심는 소극적 참여로 시작하여 푸르름을 넓히는 적극적 참여까지 다양한 활동을 실행합니다.</p>
            <h6>3. 사회적 평화와 정의를 지향하는 가치관 개발</h6>
            <p>사회적 평화와 발전을 지향하는 가치관 개발에 필요한 다양한 컨텐츠를 제작하며 지원합니다</p>
            <h6>4. 일상속 삶의 질을 높일수 있는 취미와 라이프 밸런스</h6>
            <p>'플랜테리어', '식집사' 외 MOU를 맺은 다양한 단체를 통해 삶의 질을 높일 수 있는 자기개발을 지원합니다.</p>
          </div>
        </div>      
      </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
  data () {
  return {    
    problems:[
      {
        name : "녹조현상",
        name_sub : "부영양화된 호수나 유속이 느린 하천이나 정체된 바다에서 부유성의 조류가 대량 증식하여 수면에 집적하여 물색을 현저하게 녹색으로 변화시키는 현상",
        img1 : "./img/problem/green.jpg",
        art1 : "녹조현상으로 초록색으로 덮여있는 강",
        subt1:"강 근처, 물줄기가 흐르는 곳에 뿌옇게 덮여 있는 초록색 녹조를 본적 있으신가요?",
        subm1:"녹조는 사실 무서운 현상이 아닙니다, 조류(藻類)’는 물속에 살면서 동화 색소를 가지고 독립 영양 생활을 하는 하등 식물들이 바로 '녹조' 인데요,",
        subm2:"지구온난화 등의 기온 상승으로 인해 번져간 녹조의 공포로 인해 녹조 현상이 일어나면 일단 물고기와 수중생물이 죽어 악취가 나고 그 지역의 수중 생태계가 파괴되고 있습니다.",
        subt2:"우리나라의 경우, 매년 녹조현상 피해가 발생하고 있습니다.",
        subm3:"적게는 생활악취로 시작하여 크게는 붕어100마리가 폐사를 하게 되는 일은 무더운 여름에 빈번하게 일어나는 일입니다.",
        backcolor:"rgba(0,0,0,0.5)",
        fontcolor:"#fff"
      },
      {
        name : "플라스틱 문제",
        name_sub : "연간 800만 톤의 플라스틱 쓰레기가 전 세계 바다로 흘러들어 2050년까지 해양 중 플라스틱 양이 물고기의 중량을 넘어설 것으로 예측되고 있습니다.",
        img1 : "./img/problem/trash.jpg",
        art1 : "쌓여 있는 플라스틱을 정리하는 모습",
        subt1:"우리는 일상 생활 속에서 어느 정도의 플라스틱을 만지고 있는지 세어 봅시다.",
        subm1:"한두개가 떠오르나요? 한국은 전 세계에서 포장용 플라스틱 사용량이 2위인 나라입니다.",
        subm2:"이 수치는 독일의 6배, 아일랜드의 20배에 달했고, 핀란드와 견주면 100배에 달하는 수치입니다.",
        subt2:"쓰레기를 재활용 하고, 일회용품 사용량을 줄여 나가는 것은 '설득'이 아닙니다.",
        subm3:"쏟아지는 플라스틱위에 올라선 우리들이 헤처나가야 하는 반드시 풀어야할 과제 입니다.",
        backcolor:"rgba(8,133,64,0.5)",
        fontcolor:"#fff"
      }
      
    ]
  }
  },
  
}
</script>
