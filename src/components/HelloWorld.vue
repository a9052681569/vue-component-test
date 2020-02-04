<template>
  <div>
    <BaseInput v-on:input="$emit('update:msg', mydata.msg)" placeholder='задай жирность' v-model='mydata.msg'></BaseInput>
    <BaseInput @click="baz" type='number' v-on:input="$emit('update:pts', mydata.pts)" placeholder='размер текста в пикселях' v-model='mydata.pts'></BaseInput>
    <BaseInput v-on:input="$emit('update:hi', mydata.hi)" placeholder="цвет текста" v-model='mydata.hi'></BaseInput>
    <BaseInput v-on:input="$emit('update:four', mydata.four)" placeholder="цвет фона" v-model='mydata.four'></BaseInput>
    <p v-demo="{fontSize: mydata.pts, color: mydata.hi, fontWeight: mydata.msg, bgColor: mydata.four}">эй, привет! измени меня)</p>
    <p v-bind:style="{fontSize: `${mydata.pts}px`, color: mydata.hi, fontWeight: mydata.msg, backgroundColor: mydata.four}">я так же меняюсь, но реализовано это по другому.</p>
  </div>
  
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        
      },
      pts: {
        type: String,
        default() {
          return this.foo
        }
      },
      hi: String,
      four: String
    },
    data() {
      return {
        mydata: {
          msg: this.msg,
          pts: this.pts,
          hi: this.hi,
          four: this.four,
        },
        
      }
    },
    inject: {
      foo: { default: '54' }
    },
    directives: {
      demo: {
          // определение директивы
          bind(el, binding) {
            el.style.fontSize = binding.value.fontSize + 'px'
            el.style.color = binding.value.color
            el.style.fontWeight = isNaN(Number(binding.value.fontWeight)) ? binding.value.fontWeight : Number(binding.value.fontWeight)
            el.style.backgroundColor = binding.value.bgColor
          },
          componentUpdated: function (el, binding) {
            el.style.fontSize = binding.value.fontSize + 'px'
            el.style.color = binding.value.color
            el.style.fontWeight = isNaN(Number(binding.value.fontWeight)) ? binding.value.fontWeight : Number(binding.value.fontWeight)
            el.style.backgroundColor = binding.value.bgColor
          }
      }
    },
    methods: {
        baz() {
          this.v = this.$watch('mydata.msg', this.snow)
            
        },
        snow() {
          console.log('привет')
          this.$on('update:msg', function (msg) {
            console.log(msg)
            if(msg === 'хватит') {
              this.$off()
            } else if (msg === 'совсем хватит') {
              this.$destroy()
            }
            
          })
          // убирает $watch
          this.v()

        }
    }
  }
</script>

<style scoped>
  p {
    border: 1px solid black;
    min-height: 20px;
  }
</style>
