<template>
  <div class="life" style="margin-top: 50px">
    <h1>Life Cycle Hook</h1>
    <p>age is {{ age }}</p>
    <button type="button" @click="age++">age++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ahmad",
      age: 19,
    };
  },
  beforeCreate() {
    console.log("Before Created");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("before Mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before Update");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("before Unmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
