<template>
  <Layout>
    <h1 class="title">Bienvenue !</h1>
    <ul class="post-list flex">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: "Welcome to my blog :)"
  }
};
</script>
<style>
h1.title {
  color: black;
  background: linear-gradient(120deg, #6128a1, #e94b59);
  height: 96px;
  line-height: 100px;
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
}

ul {
  margin: 0;
  padding: 0;
}
</style>
