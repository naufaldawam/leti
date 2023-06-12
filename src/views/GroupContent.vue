<template>
  <div class="group-content">
    <!-- Isi konten utama aplikasi -->
    <Introduce/>
  </div>
</template>

<script>
import Introduce from "../components/contents/Introduce.vue";

export default {
  data() {
    return {
      // Data komponen
    };
  },
  name: "contents",
  components: {
    Introduce,
  },
};
</script>

<style scoped>
.group-content {
  min-height: 100vh;
}
</style>
