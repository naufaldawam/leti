<template>
  <header class="bg-white shadow-md fixed top-0 right-0 left-0 z-10">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-4">
        <div>
          <a href="#" class="flex items-center">
            <img src="https://ik.imagekit.io/naufal/leti_logo_EyAmQxEN5.png?updatedAt=1686558654556" alt="Logo" class="h-8 w-8">
            <span class="text-lg font-bold ml-2 text-gray-800">Lab Eps Topik Indonesia</span>
          </a>
        </div>
        <div class="space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">Beranda</a>
          <a href="#" class="text-gray-600 hover:text-gray-800">Tentang</a>
          <a href="#" class="text-gray-600 hover:text-gray-800">Kontak</a>
          <a href="#" class="text-gray-600 hover:text-gray-800">Login</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // Komponen Header
};
</script>

<style scoped>
img{
  max-width: 10%;
  max-height: 10%;
}
.bg-white {
  background-color: #fff;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.left-0 {
  left: 0;
}

.z-10 {
  z-index: 10;
}

.container {
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-right: auto;
  margin-left: auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.py-4 {
/*  padding-top: 1rem;
  padding-bottom: 1rem;*/
  padding: 20px;
}

.text-lg {
  font-size: 1.125rem;
}

.font-bold {
  font-weight: 700;
}

.ml-2 {
  margin-left: 0.5rem;
}

.text-gray-800 {
  color: #1f2937;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.text-gray-600 {
  color: #4b5563;
}

.hover\:text-gray-800:hover {
  color: #1f2937;
}
</style>
