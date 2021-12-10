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

@import '../assets/mixins.scss';


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
      padding: 27px 166px;
      font-size: 30px;
      @include button()
    }
     .choose-an-area:hover {
       background-color: #1ec194;
       transition: 0.4s;
  }
    
  }
}
</style>