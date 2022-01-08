<template>
  <div>
    <picture>
      <source
        v-for="(image, index) in images"
        :key="index"
        media="(`${image.media}`)"
        :srcset="require(`${image.src}`)"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: "PictureImage",
  props: {
    images: {
      type: Array,
      required: true,
    },
    title: String,
  },
};
</script>
