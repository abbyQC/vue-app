window.Event = new Vue();

Vue.component("coupon", {
  template: `
  <div>
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  </div>
  `,

  methods: {
    onCouponApplied() {
      Event.$emit("applied");
    },
  },
});

new Vue({
  el: "#root",

  data: {
    couponApplied: false,
  },

  created() {
    Event.$on("applied", () => alert("handling it"));
  },
});
