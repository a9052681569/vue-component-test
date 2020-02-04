<script>
export default {
    name: 'BaseHeading',
    props: {
        level: String,
        amount: String
    },
    render: function (createElement) {
        let level = this.level
        let slot = this.$slots.default
        let amount = this.amount
        return createElement('div',
            Array.apply(null, { length: amount }).map(function () {
            return createElement(
                'h' + level,   // имя тега
                 slot// массив дочерних элементов
            )
            })
        )
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
