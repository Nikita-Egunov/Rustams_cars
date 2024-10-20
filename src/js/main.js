import '../fonts/fonts.css'
import '../styles/normalize.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const carsBodysList = document.querySelectorAll('.form__item--type-body')



function sendForm(formID, buttonID) {
    let form = document.getElementById(formID)
    let submitBtn = document.getElementById(buttonID)
    document.getElementById(buttonID).addEventListener('click', () => {
        // form.submit()
        console.log("форма отправлена")
    })
    submitBtn.addEventListener('click', () => {
        if (submitBtn.classList.contains('swiper-button-disabled')) {
            // form.submit()
            console.log("send")
        }
    })
};

function toggleActive(buttonID, itemID) {
    let button = document.getElementById(buttonID)
    let item = document.getElementById(itemID)

    button.addEventListener('click', () => {
        button.classList.toggle('active') 
        item.classList.toggle('active')
    })
}



const firstSwiper = new Swiper(".firstSwiper", {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next--main",
        prevEl: ".swiper-button-prev--main",
    },
    pagination: {
        el: ".swiper-pagination--firstSwiper",
        clickable: true
    },
});

const SwiperInner = new Swiper(".swiper__inner", {
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next--inner",
        prevEl: ".swiper-button-prev--inner",
    },
});

const secondSwiper = new Swiper(".secondSwiper", {
    modules: [Pagination, Navigation],
    pagination: {
        el: ".swiper-pagination__secondSwiper--fraction",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next__secondSwiper",
        prevEl: ".swiper-button-prev__secondSwiper",
    },
});

secondSwiper.on('slideChange', function () {
    const progress = (secondSwiper.activeIndex + 1) / secondSwiper.slides.length;
    const progressBar = document.querySelector('.swiper-pagination__secondSwiper');
    progressBar.style.setProperty('--progress', progress);
});

const progressBar = document.querySelector('.swiper-pagination__secondSwiper');
progressBar.style.setProperty('--progress', (secondSwiper.activeIndex + 1) / secondSwiper.slides.length);

const forms = [
    ['firstSlide-form', 'submitBtn'],
    ['secondSlide-form', 'submitBtn'],
    ['thirdSlide-form', 'submitBtn']
];

forms.forEach(([formID, buttonID]) => {
    sendForm(formID, buttonID)
})

const toggleActiveArray = [
    ['humber-btn', 'modal'],
    ['accardeonBtn--1', 'accardeonItem--1'],
    ['accardeonBtn--2', 'accardeonItem--2'],
    ['accardeonBtn--3', 'accardeonItem--3'],
    ['accardeonBtn--4', 'accardeonItem--4'],
]

toggleActiveArray.forEach(([buttonID, itemID]) => {
    toggleActive(buttonID, itemID)
})
// const buttonListPairs = [
//     ['links-open-btn-1', 'catalog__list-1','catalog__list-1--full'],
//     ['links-open-btn-2', 'catalog__list-2', 'catalog__list-2--full'],
//     ['links-open-btn-3', 'catalog__list-3', 'catalog__list-3--full'],
//     ['links-open-btn-4', 'catalog__list-4', 'catalog__list-4--full'],
//     ['links-open-btn-5', 'catalog__list-5', 'catalog__list-5--full'],
//     ['links-open-btn-6', 'catalog__list-6', 'catalog__list-6--full'],
//     ['links-open-btn-7', 'catalog__list-7', 'catalog__list-7--full'],
//     ['links-open-btn-8', 'catalog__list-8', 'catalog__list-8--full'],
//     ['links-open-btn-9', 'catalog__list-9', 'catalog__list-9--full'],
//     ['links-open-btn-10', 'catalog__list-10', 'catalog__list-10--full']
// ];

// buttonListPairs.forEach(([buttonId, listId, listIdFull]) => {
//     openLinks(buttonId, listId, listIdFull);
// });

// console.log(carsBodysList)
const carsBodysArray = Array.from(carsBodysList)
carsBodysArray.at(0).classList.add('active')

carsBodysList.forEach((el) => {
    el.addEventListener('click', () => {
        carsBodysList.forEach((el) => {
                el.classList.remove('active')
            })
        el.classList.add('active')
    })
})