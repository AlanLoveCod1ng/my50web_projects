let panels = document.querySelectorAll('.panel')
console.log(1)
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        panel.classList.add('active')
    })
})