<template>
  <div class="my-form">MyForm</div>

  <form action="">
    <div>
      <label for=""> First Name</label>
      <input type="text" v-model.lazy="student.firstName" />
      <p>Result firstName is {{ student.firstName }}</p>
    </div>
    <hr />
    <div>
      <label for=""> Last Name</label>
      <input type="text" v-model="student.lastName" />
    </div>
    <hr />
    <div>
      <label for=""> Age</label>
      <input type="number" v-model="student.age" />
    </div>
    <hr />
    <div>
      <label for=""> Email</label>
      <input type="email" v-model="student.email" />
    </div>
    <div>
      <h3>Favorite Sport</h3>
      <label for="Tennes"> Tennes</label>
      <input
        v-model="student.soprts.tennes"
        type="checkbox"
        name="tennes"
        id="tennes"
      />
      <p>{{ student.soprts.tennes }}</p>
      <label for="football"> football</label>
      <input
        v-model="student.soprts.football"
        type="checkbox"
        name="football"
        id="football"
      />
      <p>{{ student.soprts.football }}</p>
    </div>

    <div>
      <h3>Gender</h3>
      <label for="male"> male</label>
      <input
        v-model="student.gender"
        type="radio"
        name="male"
        id="male"
        value="male"
      />
      <label for="female"> female</label>
      <input
        v-model="student.gender"
        type="radio"
        name="female"
        id="female"
        value="female"
      />
    </div>
    <div>
      <h3>BIO</h3>
      <label for="bio"> bio</label>
      <textarea name="bio" id="bio" v-model="student.bio"></textarea>
      {{ student.bio }}
    </div>

    <div>
      <label for="grade">Grade</label>
      <select name="grade" id="grade" v-model="student.grade">
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
        <option value="four">four</option>
      </select>
    </div>
    {{ student.grade }}
    <hr />
    <div class="actions" style="width: 100%">
      <input type="submit" value="Submit" style="width: 50%" />
    </div>
  </form>
</template>

<script>
export default {
  name: "NyForm",
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        soprts: {
          tennes: false,
          football: false,
        },
        gender: "",
        bio: "",
        grade: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.my-form {
  form {
    display: flex;
    flex-wrap: wrap;
    div {
      widows: 40%;
    }
  }
}
</style>
