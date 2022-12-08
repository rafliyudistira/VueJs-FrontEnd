<template>
    <div>
        <FormComponents></FormComponents>
        <FormSucces class="d-none"></FormSucces>
        <CopyrightComponents></CopyrightComponents>
    </div>
</template>

<script>
import FormComponents from "../components/FormComponents.vue"
import FormSucces from "../components/FormSucces.vue"
import CopyrightComponents from "../components/CopyrightComponents.vue"

export default {
    name : 'AddStudent',
    components : {
        FormComponents,
        FormSucces,
        CopyrightComponents,
    }
}
</script>
