let myMixin = {
    mounted () {
        console.log('MIXIN INIT');
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        }
    },
    methods: {
        test() {
            console.log('Test from Mixin');
        }
    }
};

Vue.component('mixins', {
    mixins: [myMixin],
    mounted () {
        console.log('Mounted from component');
    },
    data() {
        return {
            mixinData: 'Mixin Data from Component'
        }
    },
    template: `
        <div>
            <h2>Uso de mixins</h2>
            <p>{{ mixinData }}</p>
        </div>
    `
});
