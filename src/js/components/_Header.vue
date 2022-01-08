<template>
  <header>
    <article class="container">
      <nav class="navbar">
        <a class="navbar-brand" :href="siteUrl">CraftVue</a>
        <ul class="navbar-menu p-0 mx-auto mx-lg-0 ms-lg-auto">
          <li
            v-for="(i, index) in menu"
            :key="'element-' + index"
            :class="{ 'ms-4': index !== 0 }"
          >
            <a :href="i.url" class="navbar-link">
              {{ i.title }}
            </a>
          </li>
        </ul>
      </nav>
    </article>
  </header>
</template>

<script>
export default {
  props: {
    siteUrl: String,
    menu: Array,
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>



<style lang="scss" scoped>
header {
  background-color: var(--white);
  box-shadow: 4px 5px 17px 0 rgb(0 0 0 / 6%);
}
.navbar {
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-link,
  &-brand {
    color: var(--black);
  }
  &-brand {
    font-size: 25px;
    font-weight: 600;
  }
  &-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-link {
    font-size: 16px;
  }
}
</style>
