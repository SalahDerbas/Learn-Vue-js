<template>
  <div class="my-main">
    <h2>This is Main Page</h2>
    <MyContent :students="students" :isActive="isActive" />
    <hr />
    <MyContent :students="students" :isActive="isActive" />
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  name: "MyMain",
  components: { MyContent },
  data() {
    return {
      students: ["ahmad", "salah", "fadi"],
      isActive: true,
    };
  },
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
