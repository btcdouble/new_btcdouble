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
        
    })
})

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

