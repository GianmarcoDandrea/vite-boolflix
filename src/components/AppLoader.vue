<script>
export default {

};
</script>

<template>
    <div class="wrapper">
        <img class="image" src="../assets/img/loading.svg" alt="">
        <h3>Loading...</h3>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
        width: 20%;
        animation: complete-rotation 1.2s linear infinite;
    
        @keyframes complete-rotation {
        0% {
            transform: rotate(-360deg);
        }
    }
    
}
}

</style>