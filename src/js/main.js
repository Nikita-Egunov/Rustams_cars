const humberBtn = document.getElementById('humber-btn')
const humberModal = document.getElementById('modal')

humberBtn.addEventListener('click', () => {
    humberBtn.classList.toggle('active')
    humberModal.classList.toggle('active')
})