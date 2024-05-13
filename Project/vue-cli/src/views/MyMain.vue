<template>
  <div class="my-main">
    <h2>This is Main Page</h2>
    <MyForm />
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
export default {
  name: "MyMain",
  components: { MyForm },
  data() {
    return {
      name: "ahmad",
      isComp2: false,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.my-main {
  h2 {
    color: red;
  }
  p {
    color: green;
  }
}

h2 {
  color: red;
}
</style>
