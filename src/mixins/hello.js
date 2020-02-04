export default {
    methods: {
        foo: function () {
            console.log('я сообщение из миксина')
        }
    },
    mounted: function () {
        console.log('я вызываюсь когда отрисовывается элемент с миксином')
    }
}