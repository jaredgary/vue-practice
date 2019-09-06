Vue.component('child-data', {
    data () {
        return {
            cmpName: 'Child Data Cmp'
        }
    },
    template: `
        <div>
            <h2>Acceso a datos del Cmp hijo desde el Cmp padre</h2>
        </div>
    `
});
