<template>
  <div class="settings">
    <div class="container p-4 rounded-2 bg-info bg-opacity-10">
      <div class="row mb-4">
        <div class="col-md-7 fw-bold" v-if="language === 'en'">Language</div>
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
      <button class="button" @click="emitEvent">
        Click
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { emitter } from "../main";

export default defineComponent({
  name: "Settings",
  props: ["settings", "language"],
  // emits: ["setLanguage"],
  data() {
    return {
      languageModel: this.language,
    };
  },
  methods: {
    emitEvent() {
      emitter.emit("sentMessage", {message: "123 --> message"});
    },
  },
  mounted() {
    this.settings[0]._languages.forEach(
      (
        item: {
          label: string;
          name: string;
          option: string;
        },
        index: number
      ) => {
        if (item.label === this.settings[0].currentLanguage) {
          document
            .querySelectorAll(".js-select > option")
            .forEach((optionItem, optionIndex) => {
              if (index === optionIndex) {
                optionItem.setAttribute("selected", "");
              }
            });
        }
      }
    );
    document.querySelector(".js-select")?.addEventListener("change", () => {
      this.settings[0]._languages.forEach(
        (item: { label: string }, index: number) => {
          if (item.label === this.languageModel) {
            this.$emit("setLanguage", { index, label: this.languageModel });
          }
          return false;
        }
      );
    });
  },
});
</script>
