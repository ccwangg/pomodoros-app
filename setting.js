var classic = document.getElementById("classic");
var spring = document.getElementById("spring");
var summer = document.getElementById("summer");
var winter = document.getElementById("winter");
var tomato = document.getElementById("tomato");

classic.addEventListener('click', function () {
    document.body.style.backgroundColor = colors(0,0,0);

  });


  spring.addEventListener('click', function () {
    document.body.style.backgroundColor = '#FAF3DD';

  });
  
  summer.addEventListener('click', function () {
    document.body.style.backgroundColor = '#EFEBCE';

  });

  autumn.addEventListener('click', function () {
    document.body.style.backgroundColor = '#FDF0CE';

  });
  
  winter.addEventListener('click', function () {
    document.body.style.backgroundColor = '#DDF4F8 ';

  });
  tomato.addEventListener('click', function () {
    document.body.style.backgroundColor = '#FFE4D6';

  });
  
  