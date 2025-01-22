<template>
  <button class="button-link" @click="navigate">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigate() {
      this.$router.push(this.to);
    },
  },
};
</script>

<style scoped>
.button-link {
  all: unset;
}
.button-link:hover {
  transform: scale(1.1);
}


</style>
