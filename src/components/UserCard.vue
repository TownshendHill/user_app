<template>
  <div class="user-card">
    <p>Username</p>
    <p>age</p>
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
  created() {
    console.log("userInfo", this.userInfo);
  },
};
</script>

