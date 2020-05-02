<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive" slot="item-icon">
            <slot name="item-icon"></slot>
        </div>
        <div v-else slot="item-icon-active">
            <slot name="item-icon-active"></slot>
        </div>
        <div slot="item-text" :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
      name: "TabbarItem",
      props:{
        path: String,
        activeColor:{
          type:String,
          default : 'red'
        }
      },
      data(){
        return{
        }
      },
      computed : {
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color : this.activeColor} : {}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;

        font-size: 14px;
    }

    .tab-bar-item img {
        margin-top: 3px;
        width: 24px;
        height: 24px;
        /* 去掉图片与文字之间的空隙 */
        vertical-align: middle;
        margin-bottom: 2px;
    }

</style>

