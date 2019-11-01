<template>
    <div>
        <img  @click="settingClick()" src="@/assets/my/setting.png"/>
        <div class="headerimg">
            <img src="http://yufumall-test.oss-cn-beijing.aliyuncs.com/chaoshi/2c94242e33664401a3346a35c7e59ce3.jpg"/>
        </div>
        <div class="nameview">
            <label class="userN">{{userName}}</label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topbanner',
  props: ['userName'],
  data () {
    return {
    }
  },
  methods: {
    settingClick () {
      this.$emit('settingAction', false)
    }
  }
}
</script>

<style lang="less" scoped>
  div{
        width: 100%;
        height: 350px;
        background-color: red;
        img:nth-child(1) {
            width: 48px;
            height: 48px;
            margin: 30px;
        }
     }
  .headerimg {
      width: 100%;
      height: 85px;
      text-align: center;
      :nth-child(1) {
            width: 85px;
            height: 85px;
            margin: 0px;
            border-radius: 50%;
        }
  }
  .userN{
      width: max-content;
      text-align: center;
      font-size: 20px;
      color: white;
      height: 20px;
      margin-top: 3px;
  }
  .nameview{
      width: 100%;
      height: 20px;
      text-align: center;
  }
</style>
