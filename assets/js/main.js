console.log('Hello @diana_korkunova');

function contentAnimation(data) {
    let page_name = data.next.namespace;
    
    console.log('contentAnimation');
    console.log('page name - ' + page_name);
}

function pageTransition(data) {
	let page_name = data.current.namespace;
    let link_name = data.trigger.dataset.barbaTrigger;

    console.log('pageTransition');
    console.log('page name - ' + page_name);
    console.log('link name - ' + link_name);
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
