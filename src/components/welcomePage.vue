<template>
  <div class="main">
    <div class="container">
      <h1>Discrimination and Popular Culture</h1> 
      <button class="choose-an-area" @click="$router.push('/map')">Choose an area</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

@mixin flexJCAICenter {
  display: flex;
  justify-content: center;
  align-items: center;
}



.main {
  height: 100vh;
  background-color: #000000;
  @include flexJCAICenter();
  color: white;
  font-family: Aileron;
  .container {
    @include flexJCAICenter();
    flex-direction: column;
    h1 {
      font-size: 60px;
      margin-bottom: 100px;
    }
    .choose-an-area {
      border: none;
      padding: 27px 166px;
      letter-spacing: 0.3px;
      background: #23dba8 0% 0% no-repeat padding-box;
      font-size: 30px;
      border-radius: 50px;
      color: #fff;
      font-family: Aileron;
      cursor: pointer;
      transition: 0.4s;
    }
    .choose-an-area:hover {
      background-color: #1ec194;
      transition: 0.4s;
    }
  }
}
</style>