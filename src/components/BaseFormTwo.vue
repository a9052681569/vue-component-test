<template>
<form>
    <BaseInput placeholder="введи имя форма 2" v-model="formdata.firstName"></BaseInput>
    <slot v-bind:formdata='formdata'></slot>
    <BaseInput placeholder="введи фамилию форма 2" v-model="formdata.lastName"></BaseInput>
    
</form>


</template>

<script>
export default {
    name: 'BaseFormTwo',
    props: ['formdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>