<template>
  <div class="user-card">
    <div class="user-avatar">
      <img :src="userInfo.picture.large" alt="" />
    </div>
    <p class="full-name">{{ fullName }}</p>
    <p>age: {{ userInfo.dob.age }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    fullName() {
      return `${this.userInfo.name.first} ${this.userInfo.name.last}`;
    },
  },
  created() {
    console.log("userInfo", this.userInfo);
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 350px;
  border: 1px solid black;
  border-radius: 8px;

  .user-avatar {
    width: 150px;
    height: 150px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }

  .full-name {
    font-weight: bold;
  }
}
</style>

