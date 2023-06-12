<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        <div>
          <h4 class="text-lg font-bold mb-4">Tentang Kami</h4>
          <ul>
            <li><a href="#">Tentang Lab Eps Topik Indonesia</a></li>
            <li><a href="#">Tim Kami</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4">Layanan</h4>
          <ul>
            <li><a href="#">Eps Topik</a></li>
            <li><a href="#">Webinar</a></li>
            <li><a href="#">Perusahaan</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4">Bantuan</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Syarat dan Ketentuan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4">Ikuti Kami</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
}

.bg-gray-900 {
  background-color: #ff7f00 ;
}

.text-white {
  color: #ffffff;
}

.container {
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-right: auto;
  margin-left: auto;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gap-4 {
  gap: 1rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.text-lg {
  font-size: 1.125rem;
}

.font-bold {
  font-weight: 700;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
