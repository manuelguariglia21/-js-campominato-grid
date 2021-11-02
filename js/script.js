const level = document.getElementById('mg-select');

const playBtn = document.getElementById('playBtn');

const start = document.querySelector('.mg-start');

const crazy = document.querySelector('.mg-crazy');

const easy = document.querySelector('.mg-easy');

const hard = document.querySelector('.mg-hard');



//Click Play
playBtn.addEventListener("click", function(){ 

  start.classList.remove('mg-active');

  if(level.value == "Crazy"){
    console.log('Crazy', level.value);
    //visibilità
    easy.classList.remove('mg-active');
    hard.classList.remove('mg-active');
    crazy.classList.add('mg-active');

    //create sq
    for(let i = 1; i <= 49; i++){
      const crazySq = document.createElement('div');
      crazySq.className = 'mg-sq mg-crazy-sq';
      crazy.append(crazySq);
      crazySq.innerHTML = i;

      //sfondo blu al click
      crazySq.addEventListener("click", function(){
        crazySq.classList.add('mg-blue');
      });
    }
  }
  else if(level.value == "Easy"){
    console.log('Easy', level.value);
    //visibilità
    crazy.classList.remove('mg-active');
    hard.classList.remove('mg-active');
    easy.classList.add('mg-active');

    //create sq
    for(let i = 1; i <= 100; i++){
      const easySq = document.createElement('div');
      easySq.className = 'mg-sq mg-easy-sq';
      easy.append(easySq);
      easySq.innerHTML = i;
      
      //sfondo blu al click
      easySq.addEventListener("click", function(){
        easySq.classList.add('mg-blue');
      });
    }
  }
  else if(level.value == "Hard"){
    console.log('Hard', level.value);
    //visibilità
    crazy.classList.remove('mg-active');
    easy.classList.remove('mg-active');
    hard.classList.add('mg-active');

    //create sq
    for(let i = 1; i <= 81; i++){
      const hardSq = document.createElement('div');
      hardSq.className = 'mg-sq mg-hard-sq';
      hard.append(hardSq);
      hardSq.innerHTML = i;

      //sfondo blu al click
      hardSq.addEventListener("click", function(){
        hardSq.classList.add('mg-blue');
      });
    }
  }

 });
