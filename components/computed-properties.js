Vue.component('computed-properties', {
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
    template: `
        <div>
            <h2>Computed Data</h2>
            <p>{{ fullName }}</p>
        </div>
    `
});
