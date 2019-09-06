Vue.component('conditionals', {
    data() {
        return {
            age: 10
        }
    },
    template: `
        <div>
            <h2>Condicionales v-if</h2>
            <input v-model="age" />
            <p v-if="age < 18">Menor de edad</p>
            <p v-else-if="age >= 18 && age < 30">Mayor de edad y menor de 30</p>
            <p v-else-if="age >= 30 && age < 65">mayor de 30 y menor de 65</p>
            <p v-else>Tercera edad</p>
        </div>
    `
});
