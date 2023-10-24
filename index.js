// checks which sound to play
function makesound(key){
    switch (key) {
        case 'w':
            var tom1=new Audio("./sounds/crash.mp3");
            tom1.play();
            break;
        case 'a':
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var audio1=new Audio("./sounds/snare.mp3");
            audio1.play();
            break;
        case 'd':
            var audio2=new Audio("./sounds/tom-1.mp3");
            audio2.play();
            break;
        case 'j':
            var audio3=new Audio("./sounds/tom-2.mp3");
            audio3.play();
            break;
        case 'k':
            var audio5=new Audio("./sounds/tom-3.mp3");
            audio5.play();
            break;
        case 'l':
            var audio4=new Audio("./sounds/tom-4.mp3");
            audio4.play();
            break;
    
        default:
            console.log(this.innerHTML);
            break;
    }
}
// button press
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",function (){
      makesound(this.innerHTML);
      buttonanimation(this.innerHTML);  
    });
}

//keyboard press
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

//button animation
function buttonanimation(key){
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    },100);
}