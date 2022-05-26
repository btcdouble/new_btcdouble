const counters = document.querySelectorAll('.counter-text')
const spreed = 200


counters.forEach(counter =>{
    const updateCounter = ()=>{
        const targate = parseInt(counter.getAttribute('data-target')) 
        const inc = targate / spreed
        const number = parseInt(counter.innerText)
        if(number<targate){
            counter.innerText = number + inc
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = targate
        }
        
    }
    updateCounter()
})

const collapseBtns = document.querySelectorAll('.accordion-button')

collapseBtns.forEach((btn, i) =>{
    btn.addEventListener('click', ()=>{
        collapseBtns.forEach(b=>{b.classList.remove('background')})

        btn.classList.add('background')
        // const c = btn.getAttribute('aria-expanded')
        // if (c==="true"){
        //     btn.classList.add('background')
        //     const a = collapseBtns.splice(i,1)
        //     console.log(a);
        //     a.forEach(b=>{
        //         if(b.classList.contains('background')){
        //             btn.classList.remove('background')
        //         }
        //     })
        // }else{
        //     btn.classList.remove('background')
        // }
        // console.log(c)
    })
})

