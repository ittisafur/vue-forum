<template>
  <div class="col-full">
    <h1>Welcome to Forum</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import sourceData from "../data";
import ThreadList from "../components/ThreadList";
console.log(sourceData);
export default {
  name: "PageHome",
  components: {
    ThreadList
  },
  data() {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>