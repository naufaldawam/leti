<template>
  <section class="relative">
    <div class="container">
      <div class="">
        <div class="w-full lg:w-1/2">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Selamat Datang di leti</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">Wujudkan impian Anda di korea mengenal budaya korea.</p>
          <a href="#" class="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200">Mulai Sekarang</a>
        </div>
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="flex justify-end">
            <div class="w-1/2">
              <img src="https://ik.imagekit.io/naufal/leti_logo_EyAmQxEN5.png?updatedAt=1686558654556" alt="Gambar" class="w-full h-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "introduce",
};
</script>

<style scoped>


img{
  max-width: 50%;
  max-height: 50%;
}

.relative{
  position: relative;
  padding-top: 5rem;
  padding-top: 7rem;
  margin-top: 1.25rem;
  margin-top: 1.5rem;
  margin-top: 2.5rem;

}

.container {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: auto;
  margin-left: auto;
}




.text-4xl {
  font-size: 2.25rem;
}

.lg\:text-5xl {
  font-size: 3rem;
}

.font-bold {
  font-weight: 700;
}

.text-gray-900 {
  color: #111827;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-gray-700 {
  color: #4B5563;
}

.leading-relaxed {
  line-height: 1.625;
}

.bg-blue-500 {
  background-color: #3B82F6;
}

.text-white {
  color: #ffffff;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.font-medium {
  font-weight: 500;
}

.hover\:bg-blue-600:hover {
  background-color: #2563EB;
}

.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Gaya tambahan untuk kolom gambar */
@media (max-width: 1024px) {
  .lg\:w-1\/2 {
    width: 100%;
  }
  img {
   max-width: 100%;
   max-height: 100%;
  }
}
</style>
