new Vue({
    el: '#page-container',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    },
    methods: {
        sayHi() {
            alert('hi');
        },
    },
});
