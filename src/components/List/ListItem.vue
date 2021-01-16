<template>
    <div class="row">
        <div :style="{marginLeft: row.depthLevel * 2 + '%', width: 40 - (row.depthLevel * 2) + '%' }" class="name">
            <span
            v-if="row.depthLevel > 0 && row.chief"
            >
            +
            </span>
            {{ row.name }}
        </div>
        <div class="telephone">
            {{ row.telephone }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        row: {
            type: Object,
            required: true
        }
    }
}
</script>