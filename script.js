// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').
forEach((control)=>{
    control.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})
// End Of Common JS
// Cube
let y = 20
let x = 0
let z = 0
let bool = true
let interval;
const cube =document.querySelector('.cube')

const playpause =()=>{
    if (bool){
        interval = setInterval(()=>{
        cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    },100)
    }else{
        clearInterval(interval)
    }
    
}
playpause();

document.querySelector('.controls').
addEventListener('mouseover' , ()=>{
    bool = false
    playpause()
})

document.querySelector('.controls').
addEventListener('mouseout' , ()=>{
    bool = true
    playpause()
})

document.querySelector('.top-x-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x+=20}deg)rotateY(${y}deg)rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x-=20}deg)rotateY(${y}deg)rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y-=20}deg)rotateZ(${z}deg)`
})

document.querySelector('.right-y-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y+=20}deg)rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${z-=20}deg)`
})


document.querySelector('.bottom-z-control').
addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${z+=20}deg)`
})


// End Of Cube

// slideshow
const slideshowDivs=()=>{
    for(let i=1; i<=5 ;++i){
        const div = document.createElement("div")
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`
        i===1 && div.classList.add('change')
        document.querySelector('.slideshow').appendChild(div)
    }
}
slideshowDivs();


const divs = document.querySelectorAll('.slideshow div');
let a=1;
const slideshow =()=>{
    setInterval(()=>{
        a++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change');
        if(a<divs.length){
            div.nextElementSibling.classList.add('change');
        }else{
            divs[0].classList.add('change');
            a=1;
        }
    },20000)
}
slideshow()
// End Of slideshow

// Section 3
const section3content = document.querySelector('.section-3-content')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset + window.innerHeight >= section3content.offsetTop + section3content.offsetHeight /2){
        section3content.classList.add('change')
    }
})
// End Of Section 3

// Section 4
const watchBand = document.querySelector('.watch-band')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchRightControl = document.querySelector('.watch-rigth-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0;
let axisX =0;

const hideControls =()=>{
    if(axisY === -280){
        watchTopControl.classList.add('hideControls')
    }else{
        watchTopControl.classList.remove('hideControls')
    }
    if(axisY === 280){
        watchBottomControl.classList.add('hideControls')
    }else{
        watchBottomControl.classList.remove('hideControls')
    }

    if(axisX === -280){
        watchLeftControl.classList.add('hideControls')
    }else{
        watchLeftControl.classList.remove('hideControls')
    }
    if(axisX === 280){
        watchRightControl.classList.add('hideControls')
    }else{
        watchRightControl.classList.remove('hideControls')
    }
}

watchTopControl.addEventListener('click',()=>{
    watchCases.style.marginTop = `${axisY -=70}rem`
    hideControls()
})
watchBottomControl.addEventListener('click',()=>{
    watchCases.style.marginTop = `${axisY +=70}rem`
    hideControls()
})

watchRightControl.addEventListener('click',()=>{
    watchBand.style.marginRight = `${axisX +=70}rem`
    hideControls()
})
watchLeftControl.addEventListener('click',()=>{
    watchBand.style.marginRight = `${axisX -=70}rem`
    hideControls()
})

// End Of Section 4