Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
                console.log(user);
            } catch(e) {
                console.log(e);
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2>Watchers</h2>
            <button @click="randomUser">Obtener usuario aleatorio</button>
            <p>Nuevo ususario: {{ user }}</p>
            <p>Usuario antiguo: {{ oldUser }}</p>
        </div>
    `
});
