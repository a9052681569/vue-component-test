<template>
  <div id="app">
    <HelloWorld v-bind.sync='msg'/>
    <BaseCheckbox v-model='ch'></BaseCheckbox>
    <BaseForm v-bind.sync='formdata'></BaseForm>
    <!-- оцени разные методы двухсторонней привязки пропсов в BaseForm и BaseFormTwo.
        BaseForm реализован по мануалу(значит более надежный), но BaseFormTwo в разы проще -->
    <BaseFormTwo v-bind:formdata="formdata" v-slot:default="{ formdata }">
      я слот {{formdata.firstName}}
    </BaseFormTwo>
    <p>я снаружи {{formdata.firstName}} и я снаружи {{formdata.lastName}}</p>
    <Tabs/>
    <TooMuchHeadings/>
    <HelloExtend/>
  </div>
</template>

<script>

import hello from './mixins/hello'
export default {
  name: 'app',
  components: {
    'HelloWorld': () => import('./components/HelloWorld'),
    'Tabs': () => import('./components/Tabs'),
    'TooMuchHeadings': () => import('./components/TooMuchHeadings'),
    'HelloExtend': () => import('./components/HelloExtend'),
  },
  provide: {
    foo: '52'
  },
  data() {
    return {
      msg: {
        msg: '',
        pts: '',
        hi: '',
        four: ''
      },
      ch: true,
      formdata: {
        firstName: '',
        lastName: ''
      }
    }
  },
  mixins: [hello],
  watch: {
    'msg.pts'(val, oldVal) {
      console.log('новое значение: %s, старое значение: %s', val, oldVal)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bounce-enter-active, .bounce-leave-active {
  transition: all 0.8s
}
.bounce-enter, .bounce-leave-to /* .list-leave-active до версии 2.1.8 */ {
opacity: 0;

}
</style>
