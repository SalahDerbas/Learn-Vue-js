<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in students" :key="i">{{ student }}</li>
    </ul>
    <button @click="deleteSt">change Ref</button>
    <p>Avive is : {{ isActive }}</p>
    <button @click="$emit('updateAcitve', false)">change Prem</button>
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
  emits: ["updateAcitve"],
  data() {
    return {
      myStudents: this.students,
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
