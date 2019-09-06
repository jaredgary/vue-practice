const aboutMe = {
    install: (Vue, options) => {
        const { job } = options;
        Vue.prototype.$me = (name, age) => {
            return `Mi nombre es ${name}, tengo ${age} y trabajo de ${job}`;
        }
    }
};

Vue.use(aboutMe, {
    job: 'Arquitecto de SW'
});
