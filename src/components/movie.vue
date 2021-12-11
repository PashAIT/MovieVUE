<template>
  <div class="movie">
    <div class="movie-container">
      <div class="movie-img">
        <img 
          :src="`assets/images/${movie.image}`" alt="" />
        <h3>{{ movie.title }}</h3>
      </div>
      <div class="right-container">
        <div class="movie-trailer">
          <p>Trailer</p>
          <iframe :src="`https://www.youtube.com/embed/${movie.trailer}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="movie-info">
      <p class="movie-text">
        {{ movie.discription }}
      </p>
      <div class="controls">
        <img
          src="../assets/photos/Map-Film/Arrow.svg"
          alt=""
          class="arrow-up"
          @click="$router.push(`/country?${countryId}`)"
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
import { collection, onSnapshot, query } from "@firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      movie: [],
      movieId: '',
      countryId:''
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
        this.movieId = url[1].substring( url[1].indexOf("/") + 1 );
        this.countryId = url[1].substring(0, url[1].indexOf("/") );
        console.log(this.countryId);
        this.movie = result.filter(el=>{return el.id == this.movieId && el.countryId == this.countryId })[0]
        console.log(this.movie.discription);
      });
    },
  },
};
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
        iframe{
          width:100% ;
          height: 100%;
        }
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