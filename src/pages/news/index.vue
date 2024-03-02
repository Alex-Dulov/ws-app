<template>
  <div class="news">
    <div
      class="alert alert-info alert-dismissible container p-4 rounded-2 bg-primary mb-4 text-white"
    >
      <button
        class="btn-close"
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <h3>Lorem, ipsum dolor</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex a
        officiis est possimus, porro illo sint, ipsam odio, debitis adipisci.
      </p>
    </div>
    <div class="chat__wrapper" v-for="(post, index) in posts" :key="index">
      <div class="container p-4 rounded-2 bg-info bg-opacity-10 mb-4">
        <p>{{ post.userId }}</p>
        <p>{{ post.name }}</p>
        <p>{{ post.message }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { emitter } from "../../main";

export default defineComponent({
  name: "News",
  props: ["langugage", "posts"],
  data() {
    return {
      userName: "",
      userId: "",
      message: "",
    };
  },
});
</script>
