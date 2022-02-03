// [시작하기] 버튼
function start() {
  const start = document.getElementById('start');
  start.style.display = 'none';

  const main = document.querySelectorAll(".mainpage");
  for (let i = 0; i < main.length; i++) {
    const item = main.item(i);
    item.style.visibility='visible';
  }

  // 시작하기 버튼 누르면 bgm 실행
  const audio = document.getElementById('bgm'); 
  if (audio.paused) { 
      audio.play(); 
  } else {  
      audio.pause(); 
      audio.currentTime = 0 
  } 
}

// [bgm음소거] 버튼
function mute() {
  const audio = document.getElementById('bgm'); 
    audio.pause(); 
}


const card = [0, 1, 2, 3, 4, 5, 6, 7];
let answerArray = [];

// 카드 클릭 여부를 기준으로
function clicked(num) {
  const my_answer = card[num];

  // a. 클릭되어 있으면 배열에서 빼고
  if (answerArray.includes(my_answer)) {
    const value = my_answer;
    answerArray = answerArray.filter(function(item) {
        return item !== value;
    });

    document.getElementById(num).style.boxShadow='1px 4px 0 rgb(0,0,0,0.3)';
}

  // b. 클릭되어 있지 않으면 배열에 더하고
  else {
    const tmpArray = [my_answer]
    answerArray = [...answerArray, ...tmpArray];
    document.getElementById(num).style.boxShadow='5px 8px 0 #8d2cd37b';
  }

  // 클릭시 효과음
  const audio = document.getElementById('clicksound'); 
  if (audio.paused) { 
      audio.play(); 
  } else { 
      audio.pause(); 
      audio.currentTime = 0 
  } 
}

// [다시하기] 버튼
function restart() {
  answerArray = [];

  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    const item = cards.item(i);
    item.style.boxShadow='1px 4px 0 rgb(0,0,0,0.3)';
  }
}

// [정답 확인하기] 버튼
function answer() {
  const answer = [0, 1, 2, 4, 7];
  const finalAnswer = answerArray.sort();

  // 모달창 뜰 때 클릭 잠금
  document.getElementById('main').classList.add('clicklock');

  if ((JSON.stringify(finalAnswer)) === JSON.stringify(answer)) {
    // 정답일 때 보여줄 모달창
    const correct = document.getElementById('correct');
    correct.style.display = 'flex';

    // 정답 효과음
    const audio = document.getElementById('correctsound'); 
    if (audio.paused) { 
        audio.play(); 
    } else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
  }

  else {
    // 오답일 때 보여줄 모달창
    const wrong = document.getElementById('wrong');
    wrong.style.display = 'flex';

    // 오답 효과음
    const audio = document.getElementById('wrongsound'); 
    if (audio.paused) { 
        audio.play(); 
    } else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
  }
}

// 오답일 때 모달창[닫기 버튼]
function closewrong() {
  const wrong = document.getElementById('wrong');
  wrong.style.display = 'none';
  // 클릭 잠금 해제
  document.getElementById('main').classList.remove('clicklock');
}

// 정답일 때 모달창 [닫기 버튼]
function closecorrect() {
  const correct = document.getElementById('correct');
  correct.style.display = 'none';
  // 클릭 잠금 해제
  document.getElementById('main').classList.remove('clicklock');
}
  
// [이미지 출처 보기] 토글 버튼
function ref(id) {
  const reference = document.getElementById(id);
  reference.style.visibility = ((reference.style.visibility!='hidden') ? 'hidden' : 'visible')
}