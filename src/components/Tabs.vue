<template>
    <div>
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >{{ tab }}</button>
      <transition name="bounce" mode="out-in">
        <keep-alive>
          <component
            v-bind:is="currentTabComponent"
            class="tab"
          ></component>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    components: {
        'TabArchive': () => import('./TabArchive'),
        'TabPosts': () => import('./TabPosts')
    },
    data() {
        return {
            tabs: ['Posts', 'Archive'],
            currentTab: 'Posts',
        }
    },
    computed: {
        
        currentTabComponent: function () {
            return 'Tab' + this.currentTab
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>