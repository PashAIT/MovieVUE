<template>
  <div class="country" @click="getCountryId">
    
    <div class="country-container" :style="{'background-image':'url(assets/images/country-background' +  movies[0]?.backgroundId +'.svg)'}">
      <div class="movies-container">
        <div class="move1 movies" v-for="movie in movies" :key="movie">
          <div class="img-div">
            <img
              :src="`assets/images/`+ movie.image"
              :alt="movie.title"
              class="image"
              style="width: 100% ; height:100%"
            />
            <div class="middle">
              <img
                class="play-img"
                src="../assets/photos/Map-Film/play-icon.png"
                @click="$router.push(`/movie?${movie.countryId}/${movie.id}`)"
              />
            </div>
            <h4 class="movies-title">{{ movie.title }}</h4>
          </div>
        </div>
      </div>
      <div class="globus">
        <button
          class="choose-an-area"
          @click="$router.push('/contrast-and-comparsion')"
        >
          Contrast and comparison
        </button>
        <img
          src="../assets/photos/Map-Film/Globe.svg"
          alt="Globus"
          @click="$router.push('/map')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, query } from "@firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      movies: [],
      param: "",
    };
  },
  
  mounted() {
    this.useCountries();
  },
  methods: {
    useCountries() {
      const q = query(collection(db, "Movies"));
      onSnapshot(q, (querySnapshot) => {
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc?.data());
        });
        let url = window.location.href.split("?");
        this.param = url[1];
        this.movies = result.filter((el) => {
          return el.countryId == this.param;
        });
        console.log(this.movies[0].backgroundId);
      });
    },
  },

};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.country {
  background-color: #000000;
  font-family: Aileron;
  &-container {
    height: 100vh;
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

          width: 260px;
          height: 346px;
          img {
            border-radius: 20px;
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
            text-align: center;
            display: none;
          }

          .play-img {
            padding: 16px 32px;
            cursor: pointer;
          }
        }
        h4 {
          margin-top: 10px;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
        

        .img-div:hover {
          .middle {
            display: block;
            opacity: 1;
            background-color: rgba(0,0,0,0.5);
            width: 100%;
            height: 100%;
            transition: 0.5s;
            border-radius:20px ;
              img{
                margin-top:50px
              }            
          }
        }
      }
    }
    .globus {
      display: flex;
      justify-content: space-between;
      @include globusTransform();
      .choose-an-area {
        padding: 17px 46px;
        font-size: 30px;
        margin-right: 100px;
        @include button();
      }
      .choose-an-area:hover {
        background-color: #1ec194;
        transition: 0.4s;
      }
    }
  }
}
</style>