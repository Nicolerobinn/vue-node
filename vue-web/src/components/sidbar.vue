
<template>
    <div class="tac" >
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
                <template >
                <item v-if="items[0].meta" :icon="items[0].meta && items[0].meta.icon" :title="items[0].meta.title" />
                </template>
                <sidebar-item
                    v-for="child in items[0].children"
                    :key="child.path"
                    :item="child"
                    class="nest-menu"
                >
                </sidebar-item>
            </el-menu>
    </div>
</template>
<script>
  import sidbaritem from './sidbaritem.vue';
  export default {
    data() {
        return {
        }
    },
    components:{
        sidbaritem
    },
    computed:{
        items(){
            console.log(this.$router)
            return ''
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>
<style lang="scss" scoped>
</style>
