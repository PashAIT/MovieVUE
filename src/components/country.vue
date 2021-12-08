<template>
  <div class="country">
    <div class="country-container">
      <div class="movies-container">
        <div class="move1 movies">
          <div class="img-div">
            <img
              src="../assets/photos/Map-Film/Spider-Man.jpg"
              alt="spiderMan"
              class="image"
              style="width: 100%"
            />
            <div class="middle">
              <img class="play-img" src="../assets">
            </div>
          </div>
          <h4 class="movies-title">Spider Man: No way home</h4>
        </div>
        <div class="move2 movies">
          <!-- <img src="../assets/photos/Map-Film/Spider-Man.jpg" alt="spiderMan" /> -->
          <h4 class="movies-title">Spider Man: No way home</h4>
        </div>
        <div class="move3 movies">
          <!-- <img src="../assets/photos/Map-Film/Spider-Man.jpg" alt="spiderMan" /> -->
          <h4 class="movies-title">Spider Man: No way home</h4>
        </div>
      </div>
      <div class="globus">
        <img src="../assets/photos/Map-Film/Globe.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.country {
  background-color: #000000;
  &-container {
    height: 100vh;
    background-image: url("../assets/photos/Map-Film/united-kingdom.svg");
    background-size: 100% 100%;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 100px 40px;

    .movies-container {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 183px;
      .movies {
        .img-div {
          position: relative;
          width: 50%;
          img {
            // width: 260px;
            // height: 346px;
            border-radius: 20px;
          }
          h4 {
            color: #fff;
            font-size: 20px;
            play-img-align: center;
          }
          .image {
            opacity: 1;
            display: block;
            width: 100%;
            height: auto;
            transition: 0.5s ease;
            backface-visibility: hidden;
          }

          .middle {
            transition: 0.5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            play-img-align: center;
          }

          

          .play-img {
              width: 20%;
              height: 20%;
            background-color: #04aa6d;
            color: white;
            font-size: 16px;
            padding: 16px 32px;
          }
        }
        .img-div:hover {
            .image {
              opacity: 0.3;
            }
          }

          .img-div:hover {
            .middle {
              opacity: 1;
            }
          }
      }
    }
    .globus {
      display: flex;
      justify-content: flex-end;
      img {
        cursor: pointer;
        transform: rotate(0deg);
        transition: 0.6s;
      }
      img:hover {
        transform: rotate(320deg);
        transition: 0.6s;
      }
    }
  }
}
</style>