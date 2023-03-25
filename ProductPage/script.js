// new Swiper(`.swiper-verbs`,{


//     breakpoints: {
//         420: {
//             slidesPerView: 1,
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//         },
//         720: {
//             slidesPerView: 1.5,
//             slidesPerView: 2.5,
//             slidesPerGroup: 2.5,
//         },
//         1060: {
//             slidesPerView: 2.5,
//             slidesPerView: 2.5,
//             slidesPerGroup: 2.5,
//         },
//         1200: {
//             slidesPerView: 3
//         }
//     }
// })

new Swiper(`.swiper`,{
    navigation:{
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },
    pagination:{
        el: `.swiper-pagination`,
        clickable:true,
        dynamicBullets:true,

    }
});


// new Swiper('.container-product',{ freeMode: true });