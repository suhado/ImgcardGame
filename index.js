// (bgm 선택)
const bgm = document.getElementById('bgm');

// [시작하기] 버튼
const startbtn  = document.getElementById('start');

startbtn.addEventListener('click', function() {
  startbtn.style.display = 'none';

  const main = document.querySelectorAll(".mainpage");
  for (let i = 0; i < main.length; i++) {
    const item = main.item(i);
    item.style.visibility='visible';
  }

  // 시작하기 버튼 누르면 bgm 실행
  bgm.play();
})

// bgm 버튼
// [soundoff] 버튼
const soundoff = document.getElementById('soundoff');
const soundon = document.getElementById('soundon');

soundoff.addEventListener('click', function() {
  bgm.pause();

  soundon.style.display='flex';
  soundoff.style.display='none';
})

// [soundon] 버튼
soundon.addEventListener('click', function() {
  bgm.play();

  soundon.style.display='none';
  soundoff.style.display='flex';
})

// 카드 클릭시
const cards = document.querySelectorAll('.card');
cards.forEach(function(clickcard) {
  clickcard.addEventListener('click', function() {
  
    // 클릭시 효과음
    const clicksound = document.getElementById('clicksound');
    if (clicksound.paused) {
      clicksound.play();
    } else { 
      clicksound.pause(); 
      clicksound.currentTime = 0 
    }

    // 클릭된 카드에 클래스 토글
    clickcard.classList.toggle("clicked"); 
  })
});

// (메인 화면 선택)
const main = document.getElementById('main');

// [다시하기] 버튼
const restart = document.getElementById('restart');
restart.addEventListener('click', function() {

  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    const item = cards.item(i);
    item.classList.remove("clicked")

    // 최종 결과값 초기화
    finalresult = []
  }
})


// (정답 모달 선택)
const correct = document.getElementById('correct');
// (오답 모달 선택)
const wrong = document.getElementById('wrong');

// [정답 확인하기] 버튼
const answers = ['0', '1', '2', '4', '7'];

// 최종 결과 배열
let finalresult = [];

const checkanswer = document.getElementById('answer');
checkanswer.addEventListener('click', function() {
  // 최종 결과값 초기화
  finalresult = [];

  // 모달창 뜰 때 클릭 잠금
  main.classList.add('clicklock');

  // nodeList 배열로 변환
  const myanswers = document.querySelectorAll('.clicked');
  Array.from(myanswers).forEach(function(i) { 
    let result = [i.id];
    finalresult = [...finalresult, ...result];
  });

    // 정답일 때
    if ((JSON.stringify(finalresult)) == JSON.stringify(answers)) {      
      // 정답일 때 보여줄 모달창
      correct.style.display = 'flex';

      // 정답 효과음
      const correctsound = document.getElementById('correctsound'); 
      correctsound.play(); 
    }
    // 오답일 때
    else {
      // 오답일 때 보여줄 모달창
      wrong.style.display = 'flex';

      // 오답 효과음
      const wrongsound = document.getElementById('wrongsound');
      wrongsound.play();
    }
});


// 정답일 때 모달창 [닫기 버튼]
const wrongclose = document.getElementById('wrongclose');
wrongclose.addEventListener('click', function() {
  wrong.style.display = 'none';

  // 클릭 잠금 해제
  main.classList.toggle('clicklock');
})


// 정답일 때 모달창 [닫기 버튼]
const correctclose = document.getElementById('correctclose');
correctclose.addEventListener('click', function() {
  correct.style.display = 'none';

  // 클릭 잠금 해제
  main.classList.toggle('clicklock');
})
  
// [이미지 출처 보기] 토글 버튼
const reference = document.getElementById('ref_btn');
const ref = document.getElementById('refs');
reference.addEventListener('mouseover', function() {
  ref.style.visibility = 'visible'
})
reference.addEventListener('mouseout', function() {
  ref.style.visibility = 'hidden'
})