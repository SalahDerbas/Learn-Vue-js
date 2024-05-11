<template>
  <div class="about">
    <h1>This is about Page</h1>
    <MyContent :students="students" />
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  components: {
    MyContent,
  },
  data() {
    return {
      students: ["Sami", "hadi", "Omar"],
    };
  },
};
</script>
