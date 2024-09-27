<template>
  <div :id="id" class="card mt-2 mr-2">
    <img
      class="card-img-top w-100"
      :src="image"
      style="width: 200px; height: 150px"
    />

    <div class="card-body">
      <h5 class="card-title">Ekipa: {{ teamName }}</h5>
      <p class="cart-text">Trener: {{ coach }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "image", "teamName", "coach"],
};
</script>
