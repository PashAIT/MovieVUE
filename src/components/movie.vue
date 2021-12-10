<template>
  <div class="movie">
    <div class="movie-container">
      <div class="movie-img">
        <img src="../assets/photos/Map-Film/Spider-Man.jpg" alt="" />
        <h3>Spider Man: No way home</h3>
      </div>
      <div class="right-container">
        <div class="movie-trailer">
          <p>Trailer</p>
        </div>
        <button class="choose-an-area" @click="$router.push('/map')">
          Choose an area
        </button>
      </div>
    </div>
    <div class="movie-info">
      <p class="movie-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        recusandae! Alias ea voluptatibus saepe laboriosam recusandae dolor,
        similique illo expedita libero, voluptatum doloribus placeat! Ad nemo
        voluptatem dolorum veniam eum? Praesentium sit cum nihil incidunt
        commodi, dolore velit tempora ut similique possimus officiis libero
        placeat, quis fugit nostrum aliquam unde consequuntur blanditiis
        aspernatur a non ipsam hic deleniti beatae. Hic? Expedita maiores,
        incidunt enim nobis voluptate dolorem eos illum perspiciatis animi quae
        asperiores, ut suscipit voluptas praesentium nulla fugiat. Error nihil
        architecto sit at fuga atque repellat aliquid quisquam modi? Nobis neque
        mollitia ipsum quod natus molestias, harum molestiae minus. Voluptas
        ipsa dolorem sapiente animi necessitatibus nulla voluptatibus, ipsum
        veritatis tenetur, esse adipisci cupiditate numquam, unde tempore quidem
        expedita praesentium. Error, aliquid esse? Voluptates vero aliquam enim
        quisquam similique accusamus nostrum, ratione minus sint quos quis
        quidem nobis sunt earum voluptatibus cumque architecto voluptatum culpa
        quo maiores cum quod pariatur!
      </p>
      <div class="controls">
        <img
          src="../assets/photos/Map-Film/Arrow.svg"
          alt=""
          class="arrow-up"
          @click="$router.push('/country')"
        />
        <div class="globus">
          <img
            src="../assets/photos/Map-Film/Globe.svg"
            alt="Globus"
            @click="$router.push('/map')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.movie {
  min-height: 100vh;
  padding: 5.7vh 9.83vw 2.7vh;
  background-color: black;
  color: #fff;
  font-family: Aileron;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .movie-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    .movie-img {
      img {
        width: 20.8vw;
        height: 50.28vh;
        border-radius: 20px;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 36px;
        text-align: center;
      }
    }
    .right-container {
      .movie-trailer {
        width: 47.478vw;
        height: 48.8vh;
        border: 8px solid #23dba8;
        position: relative;
        border-radius: 10px;
        background-color: black;
        margin-left: 50px;

        p {
          position: absolute;
          left: 42%;
          padding: 10px 32px;
          background-color: #23dba8;
          border-radius: 0 0 20px 20px;
          color: #fff;
          font-size: 20px;
        }
      }
      .choose-an-area {
        padding: 27px 166px;
        font-size: 30px;
        @include button();
      }
      .choose-an-area:hover {
        background-color: #1ec194;
        transition: 0.4s;
      }
    }
  }
  .movie-info {
    display: flex;

    p {
      font-size: 18px;
      margin-right: 78px;
      height: 186px;
      overflow: auto;
    }
    p::-webkit-scrollbar {
      display: none;
    }
    .controls {
      display: flex;
      flex-direction: column;
      align-items: center;

      :first-child {
        margin-bottom: 20px;
      }
      .globus {
        @include globusTransform();
      }
      .arrow-up {
        cursor: pointer;
      }
      .arrow-up:hover {
        fill: rgb(0, 0, 114);
      }
    }
  }
}
</style>