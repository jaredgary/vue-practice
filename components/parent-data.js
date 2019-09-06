Vue.component('parent-data', {
    template: `
        <div>
            <h2>Acceso a datos del Cmp padre desde el Cmp hijo</h2>
            <p>{{ $parent.appName }}</p>
        </div>
    `
});
