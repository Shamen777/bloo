function menuToggleActive(page_name) {
    const menu_items = document.querySelectorAll('.menu a');
    const menu_item_active = document.querySelector('.menu_item_active');

    menu_items.forEach(element => {
        if (element.getAttribute('data-barba-trigger') == page_name) {
            let element_data = element.getBoundingClientRect();
            menu_item_active.style.width = element_data.width + 'px';
            menu_item_active.style.left = element_data.left + 'px';
        }
    });
}

window.addEventListener('resize', function(){
    const page_name = document.querySelector('main').getAttribute('data-barba-namespace');
    menuToggleActive(page_name)
})






// test
// function scrollTo(element, to, duration) {
//     let start = element.scrollTop,
//         change = to - start,
//         currentTime = 0,
//         increment = 20;

//     let animateScroll = function () {
//         currentTime += increment;
//         var val = Math.easeInOutQuad(currentTime, start, change, duration);
//         element.scrollTop = val;
//         if (currentTime < duration) {
//             setTimeout(animateScroll, increment);
//         }
//     };
//     animateScroll();
// }

// Math.easeInOutQuad = function (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) 
//         return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
// };



function homeShow(){
    const slider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 2.5,
        dragVelocity: 2,
        draggable: 1
    })
    
    document.querySelector('.glider').addEventListener('scroll', function (e) {
        const glider_box = document.querySelector('.glider_box');
        const glider_info = document.querySelector('.glider_info');
        
        if (glider_box.classList.contains('visible')) {
            glider_info.style.opacity = 1;
            glider_info.style.zIndex = 1;
        }else if (glider_box.classList.contains('left-1')){
            glider_info.style.zIndex = -1;
            glider_info.style.opacity = 0.3;
        }else{
            glider_info.style.opacity = 0;
            glider_info.style.zIndex = -1;
        }   
    })

    document.querySelector('video').play();
}