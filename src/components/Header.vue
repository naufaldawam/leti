<template>
  <header class="bg-white">
    <div class="container">
      <nav class="flex-items-center">
        <div>
          <a href="#" class="flex-items">
            <img src="https://ik.imagekit.io/naufal/leti_logo_EyAmQxEN5.png?updatedAt=1686558654556" alt="Logo" class="h-8 w-8">
            <h2 class="text-lg-font-bold">Lab Eps Topik Indonesia</h2>
          </a>
        </div>
        <div class="space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800 hidden md:inline">Beranda</a>
          <a href="#" class="text-gray-600 hover:text-gray-800 hidden md:inline">Tentang</a>
          <a href="#" class="text-gray-600 hover:text-gray-800 hidden md:inline">Kontak</a>
          <a href="#" class="text-gray-600 hover:text-gray-800 hidden md:inline">Login</a>
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div v-if="isMenuOpen" class="md:hidden">
        <a href="#" class="block text-gray-600 hover:text-gray-800 py-2">Beranda</a>
        <a href="#" class="block text-gray-600 hover:text-gray-800 py-2">Tentang</a>
        <a href="#" class="block text-gray-600 hover:text-gray-800 py-2">Kontak</a>
        <a href="#" class="block text-gray-600 hover:text-gray-800 py-2">Login</a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 10%;
  max-height: 10%;
}
.bg-white {
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}

.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}


.flex-items-center{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.flex-items{
  display: flex;
  align-items: center;
}

.text-lg-font-bold{
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 0.5rem;
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

.hidden {
  display: none;
}

.md\:inline {
  display: inline;
}

.md\:hidden {
  display: none;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.focus\:outline-none:focus {
  outline: none;
}

@media (max-width: 400px) {
  img {
   max-width: 100%;
   max-height: 100%;
  }
}
</style>
