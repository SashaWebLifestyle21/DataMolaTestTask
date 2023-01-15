
const dropdownsMenu = document.querySelectorAll('.dropdown')

dropdownsMenu.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const menu = dropdown.querySelector('.menu')
    const menuItems = dropdown.querySelectorAll('.menu li')
    const caret = dropdown.querySelector('.caret')
    const selected = dropdown.querySelector('.selected')


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu_open')
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            selected.innerText = item.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu_open')

            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active')
            })

            item.classList.add('active')
        })
    })
})

