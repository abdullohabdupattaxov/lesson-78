let search = document.querySelector('.search')
let btn = document.querySelector('.btn')
let cards = document.querySelectorAll('.card')
let names = document.querySelectorAll('.product-name')

btn.addEventListener('click', () => {
    let value = search.value.toLowerCase()

    for (let i = 0; i < names.length; i++) {
        let productName = names[i].innerHTML.toLowerCase()

        if (productName.includes(value)) {
            cards[i].style.display = 'block'
        } else {
            cards[i].style.display = 'none'
        }
    }
})
