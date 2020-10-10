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

window.addEventListener('load', function () {

    function contentAnimation(data) {
        let page_name = data.next.namespace;

        // console.log('contentAnimation');
        // console.log('page name - ' + page_name);
        menuToggleActive(page_name);
    }

    function pageTransition(data) {
        let page_name = data.current.namespace;
        let link_name = data.trigger.dataset.barbaTrigger;

        // console.log('pageTransition');
        // console.log('page name - ' + page_name);
        // console.log('link name - ' + link_name);
    }




    function delay(n) {
        n = n || 100;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n)
        });
    }


    barba.init({
        transitions: [{
            name: 'default-transition',
            async leave(data) {
                const done = this.async();
                pageTransition(data);
                await delay(100);
                done();
            },
            async enter(data) {
                contentAnimation(data);
            },
            async once(data) {
                contentAnimation(data);
            }
        }]
    });

    console.log('Hello @diana_korkunova');
})



window.addEventListener('resize', function(){
    const page_name = document.querySelector('main').getAttribute('data-barba-namespace');
    menuToggleActive(page_name)
})