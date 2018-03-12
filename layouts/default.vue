<template>
  <div>
    <nav-bar />
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/common/navbar';

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  width: 100%;
  text-align: center;
}

.button, .button:visited {
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
