<template>
  <div class="my-main">
    <h2>This is Main Page</h2>
    <Keep-alive>
      <Mycomponent :name="name" v-if="!isComp2">
        <template #slotHeader>
          <h3>The is Header 1</h3>
        </template>
        <template #slotInputs>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter User Name"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </template>
        <template #slotActions>
          <input type="submit" value="Submit" />
        </template>
      </Mycomponent>
    </Keep-alive>

    <hr />
    <Mycomponent2 :name="name" v-if="isComp2">
      <template #slotHeader>
        <h3>The is Header 2</h3>
      </template>
      <template #slotInputs>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter User Name"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
      </template>
      <template #slotActions>
        <input type="submit" value="Submit" />
      </template>
    </Mycomponent2>
    <button @click="isComp2 = !isComp2">Toggle</button>
  </div>
</template>

<script>
import Mycomponent from "@/components/MyComponent.vue";
import Mycomponent2 from "@/components/MyComponent.vue";
export default {
  name: "MyMain",
  components: { Mycomponent, Mycomponent2 },
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
