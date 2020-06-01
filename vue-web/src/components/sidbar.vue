
<template>
    <div class="tac" >
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
            >
                <el-submenu index="1">
                  <template slot="title">
                    <i :class="items[2].meta.icon"></i>
                    <span>{{items[2].meta.title}}</span>
                  </template>
                    <sidbar-item
                        v-for="child in items[2].children"
                        :key="child.path"
                        :item="child"
                        class="nest-menu"
                    >
                    </sidbar-item>
                </el-submenu>
            </el-menu>
    </div>
</template>
<script>
  import sidbarItem from './sidbarItem.vue';
  export default {
    data() {
        return {
        }
    },
    components:{
        sidbarItem
    },
    computed:{
        items(){
            return this.$router.options.routes
        }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
>>>.el-menu-item:focus,
>>>.el-menu-item:hover {
    min-width: auto;
}
>>>.el-menu-item,
>>>.is-active{
    min-width: auto;
}
</style>
