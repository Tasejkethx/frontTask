<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active"  class="nav-link" to="/">
              Главная
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active"  class="nav-link" to="/employees">
              Сотрудники
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/departments">
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

</style>
