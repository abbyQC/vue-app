<template>
  <div id="app">
    <message>Hello There</message>
    <message>Hello Again</message>
  </div>
</template>

<script>
import message from "./component/message.vue";
export default {
  name: "app",
  components: {
    message
  },
  data() {
    return {};
  }
};
</script>

<style></style>
