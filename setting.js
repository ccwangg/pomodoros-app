var classic = document.getElementById("classic");
var spring = document.getElementById("spring");
var summer = document.getElementById("summer");
var winter = document.getElementById("winter");
var tomato = document.getElementById("tomato");
var column = document.getElementById("footer");
document.cookie=0;
var color =document.cookie ;
domain=pomodoro21606.w3spaces.com



window.onload=function (){
  if(color==0){
    document.body.style.backgroundColor = '#FFE4D6';
    column.style.backgroundColor = '#EFF2EF';
  }
  else if(color==1){
    document.body.style.backgroundColor = '#Ffffff';
    column.style.backgroundColor = '#EFF2EF';
  }
  else if(color==2){
    document.body.style.backgroundColor = '#d0eacabc';
    column.style.backgroundColor = '#FFE4D6';
  }
  else if(color==3){
    document.body.style.backgroundColor = '#fbf7c8';
    column.style.backgroundColor = '#cde3f0';
  }
  else if(color==4){
    document.body.style.backgroundColor =  '#e0c08bb5';
    column.style.backgroundColor = '#65440d8b';
  }
  else {
    document.body.style.backgroundColor = '#CDCFDC ';
    column.style.backgroundColor = '#C8C8D0';
  }
  
}


classic.addEventListener('click', function () {
    document.body.style.backgroundColor = '#Ffffff';
    column.style.backgroundColor = '#EFF2EF';
    document.cookie=1; 
    
    console.log(document.cookie);
  });


  spring.addEventListener('click', function spring() {
    document.body.style.backgroundColor = '#d0eacabc';
    column.style.backgroundColor = '#FFE4D6';
    document.cookie=2;
    console.log(document.cookie);
  });
  
  
  summer.addEventListener('click', function summer() {
    document.body.style.backgroundColor = '#fbf7c8';
    column.style.backgroundColor = '#cde3f0';
    document.cookie=3;
    console.log(document.cookie);
  });

  autumn.addEventListener('click', function autumn() {
    document.body.style.backgroundColor =  '#e0c08bb5';
    column.style.backgroundColor = '#65440d8b';
    document.cookie=4;
    console.log(document.cookie);
    
  });
  
  winter.addEventListener('click', function winter() {
    document.body.style.backgroundColor = '#CDCFDC ';
    column.style.backgroundColor = '#C8C8D0';
    document.cookie=5;
    console.log(document.cookie);

  });
  tomato.addEventListener('click', function tomato() {
    document.body.style.backgroundColor = '#FFE4D6';
    column.style.backgroundColor = '#EFF2EF';
    document.cookie=0;
    console.log(document.cookie);
  });
  
  
  

