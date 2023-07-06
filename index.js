// 1.on mouse-click mouse play sound
// 2. on keyboard-click play sound
// 3.adding animation

var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
      playsound(this.innerHTML);
      addAnimation(this.innerHTML);
    });
}


// mouse click
function playsound(k)
{
  // var k=this.innerHTML;

  switch(k)
  {
    case "w":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
     var audio=new Audio("sounds/kick-bass.mp3");
     audio.play();
     break;
     case "s":
     var audio=new Audio("sounds/snare.mp3");
     audio.play();
     break;
     case "d":
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
     break;
     case "j":
     var audio=new Audio("sounds/tom-2.mp3");
     audio.play();
     break;
     case "k":
     var audio=new Audio("sounds/tom-3.mp3");
     audio.play();
     break;
     case "l":
     var audio=new Audio("sounds/tom-4.mp3");
     audio.play();
     break;
     
  }
}

// mouseclick done

//keyboard click

// e=event, e is just a variable

document.addEventListener("keypress", function(e){
  makesound(e.key);
  addAnimation(e.key);
} );

function makesound(key)
{
  switch(key)
  {
    case "w":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
     var audio=new Audio("sounds/kick-bass.mp3");
     audio.play();
     break;
     case "s":
     var audio=new Audio("sounds/snare.mp3");
     audio.play();
     break;
     case "d":
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
     break;
     case "j":
     var audio=new Audio("sounds/tom-2.mp3");
     audio.play();
     break;
     case "k":
     var audio=new Audio("sounds/tom-3.mp3");
     audio.play();
     break;
     case "l":
     var audio=new Audio("sounds/tom-4.mp3");
     audio.play();
     break;

  }
}

//adding animation
function addAnimation(key)
{
   //selecting element
   var styleElement=document.querySelector("."+key);
   //adding animating class
   styleElement.classList.add("pressed");

   setTimeout(remove,100);

   function remove()
   {
    styleElement.classList.remove("pressed");
   }

}