<template>
    <div>
        <p>измени текст</p>
        <BaseInput placeholder="введи текст" v-model='heading.text'></BaseInput>
        <p>измени цифру тэга h</p>
        <BaseInput type='number' min='1' max='6' v-model='heading.level'></BaseInput>
        <p>измени кол-во заголовков</p>
        <BaseInput min='0' type='number' v-model='heading.amount'></BaseInput>
        <BaseHeading v-bind='heading'>{{heading.text | capitalize}}</BaseHeading>
    </div>
</template>

<script>
export default {
    name: 'TooMuchHeadings',
    data() {
        return {
            heading: {
                level: '1',
                amount: '1',
                text: 'привет'
            }
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>