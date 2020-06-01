
<template>
    <div class="tac" >
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
             :collapse="isCollapse"
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
  import { mapGetters } from 'vuex'
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
        ...mapGetters([
          'sidebar'
        ]),
        items(){
            return this.$router.options.routes
        },
        isCollapse() {
          return !this.sidebar.opened
        }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
</style>
