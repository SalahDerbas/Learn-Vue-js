<template>
  <nav class="my-nav">
    <div class="logo">
      <img src="@/assets/LogoSD.jpg" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button style="margin-right: 10px">Login</button>
      <button>SignUp</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "Ahmad",
      links: ["Link One", "Link Two", "Link three", "Link four"],
    };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 80px;
}
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px black;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}

button {
  background-color: green;
  color: white;
  padding: 5px 10px;
}
</style>
