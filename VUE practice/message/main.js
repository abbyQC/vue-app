Vue.component("modal", {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            animi quibusdam mollitia doloremque vel unde obcaecati temporibus
            distinctio impedit eveniet? Temporibus ut, beatae maiores ea
            voluptate voluptates hic facere alias!
          </p>
        </div>
      </div>
      <button class="modal-close is-large" @click="$emit('close')"></button>
    </div>
    `,
});
Vue.component("message", {
  props: ["title", "body"],

  data() {
    return {
      isVisible: true,
    };
  },
  template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{title}}

            <button type="button" @click="isVisible=false">x</button>
        </div>

        <div class="message-body">
            {{body}}
        </div>
    </article>
    `,
});
new Vue({
  el: "#root",
  data: {
    showModal: false,
  },
});
