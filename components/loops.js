Vue.component('loops', {
    data() {
        return {
            frameworks: [
                {id: 1, name: 'Vuejs 2'},
                {id: 2, name: 'Reactjs'}
            ]
        }
    },
    template: `
        <div>
            <h2>Bucles con v-for</h2>
            <ul v-if="frameworks.length">
                <li v-for="(framework, index) in frameworks" :key="framework.id">
                    ({{ index }}) | {{ framework.name }}
                </li>
            </ul>
        </div>
    `
});
