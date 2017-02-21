$(document).ready(function(){
  var scroll_start = 0;
  var codestart = $('#projects-code');
  var designstart = $('#projects-design');
  var aboutstart = $('#about');

  var codeoffset = codestart.offset();
  var designoffeset = designstart.offset();
  var aboutoffset = aboutstart.offset();

  $('#section-header').has("a").css('color', 'white');
  if (codestart.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > codeoffset.top - 30 && scroll_start < designoffeset.top - 30) {
        $('#section-header').has("a").css('color', 'black');
      }else if(scroll_start > aboutoffset.top - 30){
        $('#section-header').has("a").css('color', 'black');
      }else{
        $('#section-header').has("a").css('color', 'white');
      }
    });
  }
});



function capturahover(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Android application that helps users learn a new language by taking pictures";
}

function capturaout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}

function snakeover(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Remake of the retro game Snake";
}

function snakeout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}

function flapover(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Remake of the hit game Flappy Bird";
}

function flapout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}

function haridhamover(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Companion app for Haridham New Jersey";
}

function haridhamout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}

function siteover(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "This website is open source on Github";
}

function siteout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}

function twitteron(){
  var description = document.getElementsByClassName('about-contact-description')[0];
  description.innerHTML = "This website is open source on Github";
}

function twitterout(){
  var description = document.getElementsByClassName('about-contact-description')[0];
  description.innerHTML = "Hover to learn more";
}

function githubon(){
  var description = document.getElementsByClassName('about-contact-description')[0];
  description.innerHTML = "This website is open source on Github";
}

function githubout(){
  var description = document.getElementsByClassName('about-contact-description')[0];
  description.innerHTML = "Hover to learn more";
}

function letterson(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "A fun way to type";
}

function lettersout(){
  var description = document.getElementsByClassName('section-projects-description')[0];
  description.innerHTML = "Hover to learn more";
}
