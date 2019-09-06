Vue.component('vmodel', {
    data () {
        return {
            framework: 'Vuejs 2'
        }
    },
    template: `
        <div>
            <h2>V-model</h2>
            <input v-model="framework" v-focus />
            <p>El Framework escogido es: {{ framework }}</p>
        </div>
    `
});
