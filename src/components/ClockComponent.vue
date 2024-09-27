<template>
  <h4>Trenutno vrijeme: {{ time }}</h4>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    window.setInterval(() => {
      this.time = new Date().toLocaleTimeString("hr-HR");
    }, 1000);
  },
};
</script>

<style></style>
