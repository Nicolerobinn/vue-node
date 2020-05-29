/* eslint-disable */
<template>
  <van-form @submit="onSubmit" :validate-first="true" :show-error="false">
    <van-field
      v-model="name"
      label="联系人"
      placeholder="请填写姓名"
      name="name"
    />
    <van-field
      class="radio"
      name="radio"
      :rules="[{ radio, message: '请选择内容' }]"
    >
      <template #input>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="先生">先生</van-radio>
          <van-radio name="女士">女士</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      readonly
      clickable
      v-model="tel"
      placeholder="请输入手机号"
      label="手机号"
      name="tel"
      @touchstart.native.stop="show = true"
    >
      <template v-if="tel !== ''" #button>
        <van-icon @click="clear" name="clear" />
      </template>
    </van-field>
    <van-number-keyboard
      v-model="tel"
      :show="show"
      :maxlength="11"
      @blur="show = false"
    />
    <van-field
      @click-input="goTo"
      right-icon="arrow"
      v-model="address"
      label="收货地址"
      placeholder="请输选择收货地址"
      name="address"
    />
    <van-field
      v-model="house"
      placeholder="例：9号楼302室"
      label="门牌号"
      name="house"
    />
    <van-field name="tag" label="标签">
      <template #input>
        <div
          class="active-tag"
          :class="{ active: tagActive == i }"
          v-for="(e, i) in tagArr"
          :key="i"
          @click="setAddress(e, i)"
        >
          {{ e }}
        </div>
      </template>
    </van-field>
    <div class="address-button van-hairline--top-bottom">
      <div class="label">
        <p class="label-one">设为默认地址</p>
        <p class="label-two">
          在启动app时将优先定位至默认地址,避免下单时候选择错误地址。
        </p>
      </div>
      <van-switch v-model="switchChecked" size="20" />
    </div>
    <div class="submit-button">
      <van-button round block type="info" native-type="submit"
        >保存并使用</van-button
      >
    </div>
  </van-form>
</template>
<script>
import { Toast } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  name: "addressEdit",
  data() {
    return {
      name: "",
      tel: "",
      house: "",
      radio: "",
      show: false,
      switchChecked: false,
      tagArr: ["家", "公司", "父母家"],
      tagActive: 0
    };
  },
  created() {},
  methods: {
    ...mapMutations(["ADD_USER_SHOPPING_ADDRESS"]),
    setAddress(str, ind) {
      this.tagActive = ind;
    },
    goTo() {
      this.$router.push("map");
    },
    clear() {
      this.tel = "";
    },
    onSubmit(e) {
      e.tag = this.tagArr[this.tagActive];
      e.switchChecked = this.switchChecked;
      if (e.name.trim() == "") {
        Toast("请填写姓名");
        return;
      } else if (e.tel.trim() == "") {
        Toast("请填手机号");
        return;
      } else if (e.address.trim() == "") {
        Toast("请选择收货地址");
        return;
      } else if (e.house.trim() == "") {
        Toast("请填写门牌号");
        return;
      }
      this.ADD_USER_SHOPPING_ADDRESS(e);
      this.$router.back();
    }
  },
  computed: {
    ...mapState(["address"])
  }
};
</script>

<style lang="scss" scoped>
$color: #1ac694;
.address-button {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  .label {
    flex: 1;
    .label-one {
      font-size: 14px;
      margin-bottom: 4px;
    }
    .label-two {
      font-size: 10px;
      color: gray;
    }
  }
}
.address {
  position: relative;
  padding: 10px 16px;
  display: -webkit-flex;
  display: flex;
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .address-input-box {
    .address-icon {
      position: relative;
      overflow: hidden;
      color: #969799;
      text-align: right;
      vertical-align: middle;
      word-wrap: break-word;
    }
  }
  .address-label {
    flex: none;
    box-sizing: border-box;
    width: 90px;
  }
}
.active-tag {
  padding: 0 10px;
  font-size: 10px;
  border: 1px solid hsl(216, 14%, 93%);
  margin-right: 12px;
  border-radius: 10px;
}
.active-tag.active {
  border: 1px solid $color;
  color: $color;
}
.radio {
  padding-left: 105px;
}
.submit-button {
  margin: 16px 16px 0px;
}
/deep/ .van-radio__icon--checked .van-icon,
.van-button--info {
  background-color: $color;
  border-color: $color;
}
.van-switch--on {
  background-color: $color;
}
.van-switch {
}
</style>
