Vue.component('props', {
    props: ['name', 'surname'],
    template: `
        <div>
            <h2>Props</h2>
            <p>{{ name }} {{ surname }}</p>
        </div>
    `
});
