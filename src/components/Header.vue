<template>
  <header>
    <div
      class="promo alert bg-info bg-gradient alert-dismissible container mb-4"
      role="alert"
    >
      <button
        class="btn-close"
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <div
        class="carousel slide"
        id="carouselExampleControls"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active px-7">
            <h1 class="display-5 fw-bold">Фричат</h1>
            <p class="col-md-8 fs-4">Общайся анонимно без регистрации</p>
            <p class="col-md-8 fs-6">*Здесь может быть Ваша реклама!</p>
          </div>
          <div class="carousel-item px-7">
            <h1 class="display-5 fw-bold">Приложение на телефон</h1>
            <p class="col-md-8 fs-4">
              Устанавливай наше приложение и общайся свободно.
            </p>
          </div>
          <div class="carousel-item px-7">
            <h1 class="display-5 fw-bold">Крипта бесплатно!</h1>
            <p class="col-md-8 fs-4">
              Следи за новостями - каждый месяц розыгрыш криптовалюты.
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Назад</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Дальше</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
.promo .slide {
  height: 200px;
  overflow: hidden;
}

.promo.alert-dismissible {
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
}

.promo .carousel-control-prev,
.promo .carousel-control-next {
  width: auto;
}
</style>
