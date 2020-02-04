<template>
    <div>
        <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on='inputListeners'
        >
    </div>
    
  </template>
  
  <script>
  export default {
    inheritAttrs: false,
    name: 'BaseInput',
    props: {
      value: String
    },
    computed: {
        inputListeners: function () {
            var vm = this
            // `Object.assign` объединяет объекты вместе, чтобы получить новый объект
            return Object.assign({},
                // Мы добавляем все слушатели из родителя
                this.$listeners,
                // Затем мы можем добавить собственные слушатели или
                // перезаписать поведение некоторых существующих.
                {
                // Это обеспечит, что будет работать v-model на компоненте
                input: function (event) {
                    vm.$emit('input', event.target.value)
                }
                }
            )
        }
    },
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      div {
          padding: 10px;
      }
      input {
          width: 90%;
      }
      input:active {
          outline: none;
      }
      input:focus {
          outline: none;
      }
  </style>
  