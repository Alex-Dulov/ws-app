<template>

  <div class="profile">
    <div class="container p-4 rounded-2 bg-info bg-opacity-10">
      <div class="row">
        <div class="col-md-3">
          <img
              class="w-100 mb-4"
              src="../../assets/images/default/nophoto.png"
              alt="Аватар пользователя"
          />
        </div>
        <div class="col-md-9">
          <div class="fs-7">nickname</div>
          <p class="display-6 fw-bold">{{ userName }}</p>
          <div class="fs-7">user id</div>
          <p>{{ userId }}</p>
          <div class="fs-7">about me</div>
          <p class="mb-4">{{ aboutMessage }}</p>
          <form
              class="container mb-3 js-chat-form"
              id="chatForm"
              @submit.prevent="onSubmit($event, sentMessage, 'post')"
          >
                  <textarea
                      class="form-control mb-3"
                      id="message"
                      name="message"
                      type="text"
                      placeholder=""
                      aria-label="Message"
                      aria-describedby="sendPost"
                      v-model="message"
                  />
            <button
                class="btn btn-outline-primary"
                type="submit"
                id="sendPost"
            >
              Создать пост
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="chat__wrapper" v-for="(post, index) in myPosts" :key="index">
          <div class="container p-4 rounded-2 bg-info bg-opacity-10 mb-4" v-if="post.userId === userId">
            <p>{{ post.userId }}</p>
            <p>{{ post.name }}</p>
            <p>{{ post.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {emitter} from "@/main";
// import { emitter } from "../main";

export default defineComponent({
  name: "Profile",
  props: [
    "userName",
    "aboutMessage",
    "userId",
  ],
  data() {
    return {
      myPosts: [],
      message: "",
    };
  },
  methods: {

    onSubmit() {
      emitter.emit("sentMessage", {
        userName: this.userName,
        userId: this.userId,
        message: this.message,
      });
    },
  },
});
</script>