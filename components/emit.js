Vue.component('emit', {
    data () {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos</h2>
            <p @click="$emit('carbrand', carBrand)">Pulsa aqui para emitir un evento a la instancia Root</p>
        </div>
    `
});
