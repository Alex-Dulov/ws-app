<template>
  <div class="about-modal">
    <div
        class="modal fade"
        id="aboutModal"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabindex="-1"
        aria-labelledby="aboutModalLabel"
        aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="aboutModalLabel">What Your name?</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input class="mb-3" type="text" placeholder="Name" v-model="userName" />
            <textarea placeholder="About" />
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="setUserName"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as bootstrap from "bootstrap";

export default defineComponent({
  name: "aboutModal",
  props: ["aboutModalShow"],
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    setUserName() {
      console.log("setUserName");
      // this.$emitter.emit("setName", "emitter");
    },
  },
  mounted() {
    if (this.aboutModalShow) {
      // открытие модального окна при загрузке страницы
      const aboutModal = new bootstrap.Modal("#aboutModal", {});
      aboutModal.show();
    }
  },
});
</script>

<style lang="scss">
.modal-body {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>