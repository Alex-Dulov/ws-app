<template>
  <nav
    class="navbar navbar-expand-md container p-4 rounded-2 bg-light mb-4 sticky-top"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/about">
        <button type="button" class="btn btn-outline-secondary">
          <svg
            class="bi bi-megaphone-fill"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"
            ></path>
          </svg>
        </button>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <router-link to="/">
            <button class="btn btn-outline-warning" type="button">
              <span v-if="language === 'ru'">Новости</span>
              <span v-if="language === 'en'">News</span>
            </button>
          </router-link>
          <router-link to="/users">
            <button class="btn btn-outline-primary" type="button">
              <span v-if="language === 'ru'">Пользователи</span>
              <span v-if="language === 'en'">Users</span>
            </button>
          </router-link>
          <router-link to="/users/chat">
            <button class="btn btn-outline-primary" type="button">
              <span v-if="language === 'ru'">Общий чат</span>
              <span v-if="language === 'en'">Public chat</span>
            </button>
          </router-link>
          <router-link to="/users/profile">
            <button class="btn btn-outline-secondary" type="button">
              <span v-if="language === 'ru'">Мой профиль</span>
              <span v-if="language === 'en'">My profile</span>
            </button>
          </router-link>
          <router-link to="/settings">
            <button class="btn btn-outline-info" type="button">
              <span v-if="language === 'ru'">Настройки</span>
              <span v-if="language === 'en'">Settings</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
  props: {
    language: {
      type: String,
      readonly: true,
      default: "en",
    },
  },
});
</script>

<style scoped lang="scss">
.navbar .btn {
  margin: 0.25rem 0.125rem;
}
</style>
