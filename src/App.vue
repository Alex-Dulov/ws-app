<template>
  <Header :language="settings[0].currentLanguage.label" />
  <!--
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aboutModal">
    Launch modal
  </button>
  -->
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
          <input class="mb-3" type="text" placeholder="Name" />
          <textarea placeholder="About" />
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>
  <section class="content mb-4">
    <div class="container mb-4">
      <ul class="nav nav-tabs" id="mainMenu" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="about-tab"
            data-bs-toggle="tab"
            data-bs-target="#about"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
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
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="news-tab"
            data-bs-toggle="tab"
            data-bs-target="#news"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <span v-if="language === 'ru'">Новости</span>
            <span v-if="language === 'en'">News</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="users-tab"
            data-bs-toggle="tab"
            data-bs-target="#users"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span v-if="language === 'ru'">Пользователи</span>
            <span v-if="language === 'en'">Users</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="chat-tab"
            data-bs-toggle="tab"
            data-bs-target="#chat"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span v-if="language === 'ru'">Общий чат</span>
            <span v-if="language === 'en'">Public chat</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span v-if="language === 'ru'">Профиль</span>
            <span v-if="language === 'en'">Profile</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="settings-tab"
            data-bs-toggle="tab"
            data-bs-target="#settings"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span v-if="language === 'ru'">Настройки</span>
            <span v-if="language === 'en'">Settings</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <div class="about">
          <div class="container p-4 rounded-2 bg-info bg-opacity-10">
            <h2 class="mb-4">Что за Фричат?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              eaque impedit quo modi illo exercitationem sequi dolorum totam
              tenetur, consequuntur tempore reiciendis, fugiat aspernatur saepe
              delectus repellat debitis itaque temporibus quaerat velit.
              Accusantium, tenetur sapiente!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              vitae numquam et.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              eaque impedit quo modi illo exercitationem sequi dolorum totam
              tenetur, consequuntur tempore reiciendis, fugiat aspernatur.
            </p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade show active"
        id="news"
        role="tabpanel"
        aria-labelledby="news-tab"
      >
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ex a officiis est possimus, porro illo sint, ipsam odio, debitis
              adipisci.
            </p>
          </div>
          <div
            class="chat__wrapper"
            v-for="(post, index) in posts"
            :key="index"
          >
            <div class="container p-4 rounded-2 bg-info bg-opacity-10 mb-4">
              <p>{{ post.userId }}</p>
              <p>{{ post.name }}</p>
              <p>{{ post.message }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="users"
        role="tabpanel"
        aria-labelledby="users-tab"
      >
        <div class="users">
          <div class="container p-4 rounded-2 bg-info bg-opacity-10">
            <div class="row"></div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="chat"
        role="tabpanel"
        aria-labelledby="chat-tab"
      >
        <div class="chat">
          <div
            class="chat__wrapper"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div
              class="container d-flex"
              :class="
                userId === message.userId
                  ? 'justify-content-end'
                  : 'justify-content-start'
              "
            >
              <div
                class="p-3 rounded-2 bg-opacity-10 w-75 mb-4"
                :class="userId === message.userId ? 'bg-primary' : 'bg-info'"
              >
                <p class="fs-7">
                  <span class="fw-bold">{{ message.name }}</span>
                  <span>&ensp;&ensp;</span>
                  <span>id:&nbsp;{{ message.userId }}</span>
                  <span>&ensp;&ensp;</span>
                  <span>12:10</span>
                </p>
                <p>{{ message.message }}</p>
              </div>
            </div>
          </div>
          <form
            class="container input-group mb-3 js-chat-form"
            id="chatForm"
            @submit.prevent="onSubmit($event, sentMessage, 'message')"
          >
            <input
              class="form-control"
              id="message"
              name="message"
              type="text"
              placeholder=""
              aria-label="Message"
              aria-describedby="sendButton"
              v-model="sentMessage"
            />
            <input
              class="btn btn-outline-secondary"
              type="submit"
              value="-->"
              id="sendButton"
            />
          </form>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="profile">
          <div class="container p-4 rounded-2 bg-info bg-opacity-10">
            <div class="row">
              <div class="col-md-3">
                <img
                  class="w-100 mb-4"
                  src="./assets/default-user.png"
                  alt="Аватар пользователя"
                />
              </div>
              <div class="col-md-9">
                <div class="fs-7">nickname</div>
                <p class="display-6 fw-bold">Username</p>
                <div class="fs-7">user id</div>
                <p>867586587658</p>
                <div class="fs-7">about me</div>
                <p class="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  dignissimos, reiciendis illum maxime est quisquam.
                </p>

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
                    v-model="sentMessage"
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
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <div class="settings">
          <div class="container p-4 rounded-2 bg-info bg-opacity-10">
            <div class="row mb-4">
              <div class="col-md-7 fw-bold" v-if="language === 'en'">
                Language
              </div>
              <div class="col-md-7 fw-bold" v-if="language === 'ru'">Язык</div>
              <div class="col-md-5">
                <select
                  class="form-select js-select"
                  aria-label="Change language"
                  v-model="languageModel"
                >
                  <option
                    v-for="(item, index) in settings[0]._languages"
                    :value="item.label"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer :language="settings[0].currentLanguage.label" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const ws = new WebSocket("ws://127.0.0.1:8000");

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      language: "ru",
      languageModel: "",
      settings: [
        {
          name: "Language",
          currentLanguage: {
            index: 0,
            label: "en",
          },
          _languages: [
            {
              label: "en",
              name: "English",
              option: "Language",
            },
            {
              label: "ru",
              name: "Русский",
              option: "Язык",
            },
          ],
        },
      ],
      messages: [],
      posts: [],
      userId: "",
      sentMessage: "",
    };
  },
  methods: {
    setLanguage(language: { index: number; label: string }) {
      this.settings[0].currentLanguage = language;
      localStorage.setItem("language", this.settings[0].currentLanguage.label);
    },
    receivingMessage: function (messageData: any) {
      console.log("receivingMessage:", messageData);
      // let message = JSON.parse(messageData);

      // получение id
      if (!this.userId && messageData[0].type === "user") {
        this.userId = messageData[1].userId;
        console.log("userId:", this.userId);
      }

      // получение сообщения
      if (messageData[0].type === "message") {
        (this.messages as string[]).push(messageData[1]);
      }

      // получение поста
      if (messageData[0].type === "post") {
        (this.posts as string[]).push(messageData[1]);
      }
    },

    onSubmit: function (event: Event, message: string, type = "none") {
      if (message) {
        // отправка сообщения на сервер
        ws.send(
          JSON.stringify([
            {
              type,
            },
            {
              userId: this.userId,
              name: "test",
              message: this.sentMessage,
            },
          ])
        );
        // очистка формы, после отправки сообщения
        this.sentMessage = "";
      }
      return false;
    },
  },
  mounted() {
    if (!localStorage.getItem("language")) {
      // Установка языка если нет записи в localStorage
      this.setLanguage({
        index: 0,
        label: this.settings[0]._languages[0].label,
      });
    } else {
      // Установка языка если есть запись в localStorage
      this.settings[0]._languages.forEach((item: { label: string }, index) => {
        if (localStorage.getItem("language") === item.label) {
          this.setLanguage({
            index,
            label: [localStorage.getItem("language")].join(),
          });
          return false;
        }
      });
    }

    ws.onopen = (event) => {
      console.log("chat starting", event);
    };

    // получение сообщения с сервера
    ws.onmessage = (rawMessage) => {
      this.receivingMessage(JSON.parse(rawMessage.data));
    };

    // открытие модального окна при загрузке страницы
    // const aboutModal = new bootstrap.Modal('#aboutModal', {});
    // aboutModal.show();
  },
});
</script>

<style lang="scss">
.px-7 {
  padding-right: 4rem !important;
  padding-left: 4rem !important;
}

.fs-7 {
  font-size: 14px;
  color: #666666;
}
</style>
