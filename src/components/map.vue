<template>
  <div class="map">
    <div
      :class="`container${country.id}`"
      class="flags"
      @click="$router.push('/country')"
      v-for="country in countries"
      :key="country"
    >
      <h3>{{ country.name }}</h3>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, query } from "@firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.useCountries();
  },
  methods: {
    useCountries() {
      const q = query(collection(db, "Countries"));
      onSnapshot(q, (querySnapshot) => {
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc?.data());
        });
        this.countries = result;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  background-image: url("../assets/photos/Сгруппировать59.svg");
  background-size: 100% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #000000;
  position: relative;

  .container1 {
    background-image: url("../../public/assets/images/USA.svg");
    top: 20%;
    left: 19%;
  }

  .container3 {
    background-image: url("../../public/assets/images/India.svg");
    top: 41%;
    left: 70.5%;
  }
  .container4 {
    background-image: url("../../public/assets/images/Korea.svg");
    top: 27%;
    left: 82%;
  }
  .container2 {
    background-image: url("../../public/assets/images/Britain.png");
    background-position: center center;
    top: 16%;
    left: 48%;
  }

  .flags {
    height: 70px;
    width: 70px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
    position: relative;
    position: absolute;
    transition: 0.3s;
    cursor: pointer;

    h3 {
      font-family: Aileron;
      color: white;
      font-size: 50px;
      position: absolute;
      top: 20%;
      left: 110%;
      opacity: 0;
      display: none;
    }
  }
  .flags:hover {
    height: 110px;
    width: 110px;
    transition: 0.3s;
    h3 {
      display: block;
      animation-name: flagName;
      animation-duration: 0.3s;
      opacity: 1;
    }
  }
}
@keyframes flagName     {
  0% {
    left: 10px;
    opacity: 0;
    font-size: 20px;
  }
  45% {
    opacity: 0.3;
    font-size: 30px;
  }
  80% {
    opacity: 0.7;
    font-size: 49px;
  }
  100% {
    left: 120px;
    font-size: 50px;
  }
}
</style>