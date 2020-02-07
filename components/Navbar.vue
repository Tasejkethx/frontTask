<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active"  class="ml-2 nav-link nav-font-size mr-1" to="/">
              Главная
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active"  class="nav-link nav-font-size mr-1" to="/employees">
              Сотрудники
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link nav-font-size mr-1" to="/departments">
              Отделы
            </nuxt-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style scoped>
.nav-font-size {
  font-size: 1.2rem;
}
</style>
