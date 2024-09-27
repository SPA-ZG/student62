<template>
  <div>
    <p>{{ message }}</p>
    <input v-bind:value="message" />
    <p>{{ test }}</p>
    <input v-model="test" @keyup="uppercase" />
    <p>Obrnuti test: {{ reversedMessage }}</p>
    <p class="scoped-text">
      Ovo je tekst koji treba biti zelen i to je scoped style.
    </p>
    <p>Vrijeme koje se mijenja (lifecycle hook): {{ timeStarted }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!",
      test: "",
      timeStarted: "",
    };
  },

  methods: {
    uppercase() {
      this.test = this.test.toUpperCase();
    },
  },

  computed: {
    reversedMessage() {
      return this.test.split("").reverse().join("");
    },
  },
  mounted() {
    window.setInterval(() => {
      this.timeStarted = new Date().toLocaleTimeString("hr-HR");
    }, 1000);
  },
};
</script>

<style scoped>
.scoped-text {
  color: green;
}
</style>
