<template>
    <div class="center swiper">
        <l-swiper />
    </div>
</template>

<script>
import LSwiper from '@/components/swiper/swiper.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
        LSwiper
    }
}
</script>

<style scoped>
.swiper{
    width:520px;
    height:320px;
    background-image:url(../../assets/imgs/frame_photo.jpg);
    border-radius:5px;
    background-size:cover;
}
</style>