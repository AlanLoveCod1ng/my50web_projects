let next = document.getElementById("next")
let prev = document.getElementById("prev")
let progress = document.getElementById("progress")
let circles = document.querySelectorAll(".circle")

let currentStep = 0

next.addEventListener('click',()=>{
    currentStep++;
    if(currentStep>=circles.length){
        currentStep = circles.length
    }
    update();
})

prev.addEventListener('click',()=>{
    currentStep--;
    if(currentStep<=0){
        currentStep = 0
    }
    update();
})


function update(){
    circles.forEach((circle,idx)=>{
        if(idx<=currentStep){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });
    let actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length-1)/(circles.length-1))*100+"%"

    prev.disabled = false
    next.disabled = false
    if(currentStep===0){
        prev.disabled = true
    }
    if(currentStep===circles.length-1){
        next.disabled = true
    }
}