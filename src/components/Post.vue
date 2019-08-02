<template>
  <div>
    <h2 v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path" class="btn">
      En savoir plus
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.btn {
  text-decoration: none;
  background: #6128a1;
  padding: 8px 16px;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
}
</style>

