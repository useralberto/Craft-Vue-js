<template>
  <header>
    <article class="container">
      <nav class="navbar">
        <a class="navbar-brand" href="#">CraftVue</a>
        <ul class="navbar-menu ms-auto">
          <li
            v-for="(i, index) in data.menu"
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
  data() {
    return {
      data: {
        menu: [
          {
            url: "http://mysite.test/",
            title: "Home",
          },
          {
            url: "#",
            title: "Aboutus",
          },
          {
            url: "#",
            title: "Blog",
          },
          {
            url: "#",
            title: "Contacts",
          },
        ],
      },
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
