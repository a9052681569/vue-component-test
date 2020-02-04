<template>
<form>
    <BaseInput 
    v-on:input="$emit('update:firstName', mydata.firstName)" 
    v-model="mydata.firstName"
    placeholder="введи имя"
    ></BaseInput>
    <BaseInput 
    v-on:input="$emit('update:lastName', mydata.lastName)" 
    v-model="mydata.lastName"
    placeholder="введи фамилию"
    ></BaseInput>
</form>

</template>

<script>
export default {
    name: 'BaseForm',
    props: ['firstName', 'lastName'],
    data() {
        return {
            mydata: {
                firstName: this.firstName,
                lastName: this.lastName
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>