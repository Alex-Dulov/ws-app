<template>
  <div class="container d-flex justify-content-start">
    <div class="p-3 rounded-2 bg-info bg-opacity-10 w-75 mb-4">
      <p class="fs-7">
        <span class="fw-bold">Username</span>
        <span>&ensp;&ensp;</span>
        <span>id:&nbsp;4373735673567</span>
        <span>&ensp;&ensp;</span>
        <span>12:00</span>
      </p>
      <p>Lorem ipsum dolor sit</p>
    </div>
  </div>
  <div class="container d-flex justify-content-end">
    <div class="p-3 rounded-2 bg-primary bg-opacity-10 w-75 mb-4">
      <p class="fs-7">
        <span class="fw-bold">Username</span>
        <span>&ensp;&ensp;</span>
        <span>id:&nbsp;54847567856</span>
        <span>&ensp;&ensp;</span>
        <span>12:10</span>
      </p>
      <p>Lorem ipsum, dolor sit.</p>
    </div>
  </div>
  <form
    class="container input-group mb-3 js-chat-form"
    id="chatForm"
    @submit.prevent="onSubmit($event, message)"
  >
    <input
      class="form-control"
      id="message"
      name="message"
      type="text"
      placeholder=""
      aria-label="Message"
      aria-describedby="sendButton"
      v-model="message"
    />
    <input
      class="btn btn-outline-secondary"
      type="submit"
      value="-->"
      id="sendButton"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Chat",
  props: ["settings", "language", "sentMessage"],
  // emits: ["sentMessage"],
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  methods: {
    onSubmit: function (event: Event, message: string) {
      // console.log("submit");
      if (message) {
        // this.emitter.emit("sentMessage", {message: message});
        // this.emitter("update:sentMessage", message);
        // очистка формы, после отправки сообщения
        this.message = "";
      }
      return false;
    },
  },
  mounted() {
    console.log("mount chat component")
  },
});
</script>
