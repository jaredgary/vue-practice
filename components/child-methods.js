Vue.component('child-methods', {
    data () {
        return {
            cmpName: 'Child Methods Cmp'
        }
    },
    methods: {
        showCmpName() {
            console.log(this.cmpName);
        }
    },
    template: `
        <div>
            <h2>Acceso a metodos del Cmp hijo desde el Cmp padre</h2>
        </div>
    `
});
