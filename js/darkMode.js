const darkModeBtn = document.querySelector('.dark-mode-btn')

if(localStorage.getItem('darkMode') === 'light') {
    darkModeBtn.classList.remove('dark-mode-btn__active')
    document.body.classList.add('light')
}


darkModeBtn.onclick = () => {
    darkModeBtn.classList.toggle('dark-mode-btn__active')
    const isLight = document.body.classList.toggle('light')

    if(isLight) {
        localStorage.setItem('darkMode', 'light')
    } else {
        localStorage.setItem('darkMode', 'dark')
    }
}