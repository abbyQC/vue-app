Vue.component("coupon", {
  template: `
  <div>
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  </div>
  `,

  methods: {
    onCouponApplied() {
      this.$emit("applied");
    },
  },
});

new Vue({
  el: "#root",

  data: {
    couponApplied: false,
  },

  methods: {
    onCouponApplied() {
      alert("It was applied");
      this.couponApplied = true;
    },
  },
});
