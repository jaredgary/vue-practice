Vue.component('slots', {
    template: `
        <div>
            <h2>Slots</h2>
            <div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footers"></slot>
                </footer>
            </div>
        </div>
    `
});
