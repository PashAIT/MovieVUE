<template>
   <div class="map">
        <div class="left-container">
            <div class="usa-container flags">
                <h3>U.S.A</h3>
            </div>
        </div>
        <div class="right-container">
            <div class="india-container flags">
                <h3>India</h3>
            </div>
            <div class="southKorea-container flags">
                <h3>South Korea</h3>
            </div>
            <div class="greateBritan-container flags">
                <h3>Great Britain</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

* {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
}
.map {
    height: 100vh;
    display: grid;
    grid-template-columns: auto auto;
    background-image: url("../assets/photos/Сгруппировать59.svg");
    background-size: 100% 90%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #000000;

    .left-container {
        position: relative;

        .usa-container {
            background-image: url("../assets/photos/Map-Film/USA.svg");
            top: 20%;
            left: 37%;
        }
    }
    .right-container {
        position: relative;

        .india-container {
            background-image: url("../assets/photos/Map-Film/India.svg");
            top: 41%;
            left: 41%;
        }
        .southKorea-container {
            background-image: url("../assets/photos/Map-Film/Korea.svg");
            top: 27%;
            left: 65%;
        }
        .greateBritan-container {
            background-image: url("../assets/photos/Map-Film/Britain.png");
            background-position: center center;
            top: 16%;
            left: -6%;
        }
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
        }
    }
    .flags:hover {
        height: 110px;
        width: 110px;
        transition: 0.3s;
        h3 {
            animation-name: flagName;
            animation-duration: 0.3s;
            opacity: 1;
            z-index: 0;
        }
    }
}
@keyframes flagName {
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