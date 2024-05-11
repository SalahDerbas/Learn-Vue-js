<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in students" :key="i">{{ student }}</li>
    </ul>
    <button @click="deleteSt">change Ref</button>
    <p>Avive is : {{ myActive }}</p>
    <button @click="myActive = !myActive">change Prem</button>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    deleteSt() {
      this.myStudents.shift();
    },
  },
  data() {
    return {
      myStudents: this.students,
      myActive: this.isActive,
    };
  },
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
