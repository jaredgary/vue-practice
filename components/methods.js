Vue.component('methods', {
    data () {
        return {
            name: 'Gary',
            surname: 'Gonzalez'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello () {
            alert(this.fullName);
        }
    },
    template: `
        <div>
            <h2>Methods</h2>
            <p @click="hello">Pulsa aqui para ejecutar metodo</p>
        </div>
    `
});
