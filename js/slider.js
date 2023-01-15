const classHidden = 'hidden'
const slider1 = document.querySelector('#slider1')
const sliderItems1 = Array.from(slider1.children)
const btnNext1 = document.querySelector('#nextBtn1')
const btnPrev1 = document.querySelector('#prevBtn1')
const slider2 = document.querySelector('#slider2')
const sliderItems2 = Array.from(slider2.children)
const btnNext2 = document.querySelector('#nextBtn2')
const btnPrev2 = document.querySelector('#prevBtn2')

const showNextSlide = (direction, slider, sliderItems) => {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add(classHidden)
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex
    if(direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
    } else {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove(classHidden)
    nextSlide.setAttribute('data-active', '')
}

sliderItems1.forEach((slide, index) => {

    if(index !== 0) {
        slide.classList.add(classHidden)
    }

    slide.dataset.index = index

    sliderItems1[0].setAttribute('data-active', '')

    slide.addEventListener('click', () => {
        showNextSlide('next', slider1, sliderItems1)
    })
})

btnNext1.onclick = () => {
    showNextSlide('next', slider1, sliderItems1)
}

btnPrev1.onclick = () => {
    showNextSlide('prev', slider1, sliderItems1)
}

sliderItems2.forEach((slide, index) => {

    if(index !== 0) {
        slide.classList.add(classHidden)
    }

    slide.dataset.index = index

    sliderItems2[0].setAttribute('data-active', '')

    slide.addEventListener('click', () => {
        showNextSlide('next', slider2, sliderItems2)
    })
})

btnNext2.onclick = () => {
    showNextSlide('next', slider2, sliderItems2)
}

btnPrev2.onclick = () => {
    showNextSlide('prev', slider2, sliderItems2)
}