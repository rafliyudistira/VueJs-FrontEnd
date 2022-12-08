<template>
    <div>
        <LogoComponents></LogoComponents>
        <FormSucces v-if="succes"></FormSucces>
        <div v-else class="vale">
        <CardVale @deleteEmit="succes = true"></CardVale>
        </div>
        <CopyrightComponents></CopyrightComponents>
    </div>
</template>

<script>
import LogoComponents from "../components/LogoComponents.vue"
import CardVale from "../components/CardVale.vue"
import CopyrightComponents from "../components/CopyrightComponents.vue"
import FormSucces from "../components/FormSucces.vue"

export default {
    name : "HalamanUtamaPages",
    components : {
        LogoComponents,
        CardVale,
        CopyrightComponents,
        FormSucces,
    },
    data(){
        return{
            succes : false
        }
    }
}
</script>

<style scoped>
    .vale {
        display: flex;
        flex-wrap: wrap;
    }
</style>
