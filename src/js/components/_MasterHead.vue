<template>
  <article class="masterHead">
    <!--Revisar que cuadren los datos que se le van a pasar para crear el elemento -->
    <!--Estructura a crear [ title: '', images: [ { media: '', src: '' }] ]-->
    <ProjectCard :images="data.images" :title="data.title" />
  </article>
</template>


<script>
import PictureImage from "../components/_PictureImage.vue";

export default {
  components: {
    "picture-image": PictureImage,
  },
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.masterHead {
  min-height: 500px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: #f7f7f7;
  }
}
</style>
