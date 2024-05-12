<template>
  <div class="my-main">
    <h2>This is Main Page</h2>
    <MyContent
      :students="students"
      @updateAcitve="changeActive($event)"
      :isActive="isActive"
    />
    <hr />
    <MyContent
      :students="students"
      @updateAcitve="changeActive($event)"
      :isActive="isActive"
    />
  </div>
  <LifeCycle />
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  name: "MyMain",
  components: { MyContent, LifeCycle },
  data() {
    return {
      students: ["ahmad", "salah", "fadi"],
      isActive: true,
    };
  },
  methods: {
    changeActive(data) {
      this.isActive = data;
    },
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
