Vue.filter('currency_filters', (value, currency) => {
    return `${value}${currency}`;
});
