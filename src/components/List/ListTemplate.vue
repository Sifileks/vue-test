<template>
    <div id="list">
        <div class="row">
            <div 
            class="name"
            @click="sortRows"
            :rows="rows"
            >
                Имя
            </div>
            <div class="telephone">
                Телефон
            </div>
        </div>
        <ListItem 
        v-for="row of rows"
        :row="row"
        />
    </div>
</template>

<script>
import ListItem from '@/components/List/ListItem.vue'

export default {
    props: [
        'rows'
    ],
    methods: {
        sortRows() {
            this.$emit( 'sortRows' )
        }
    },
    components: {
        ListItem
    }
}
</script>

<style>
    #list {
        border-top: 1px solid #999;
    }
    #list .row {
        display: flex;
       
    }
    #list .row:first-child {
        border-top: none;
    }
    #list .row:first-child .name {
        cursor: pointer;
    }
    #list .name, #list .telephone {
        padding: 8px;
        border-left: 1px solid #999;
        border-bottom: 1px solid #999;
        border-top: 1px solid #999;
    }
    #list .name {
        width: 40%;
        border-top: 1px solid #999;
    }
    #list .telephone {
        width: 60%;
        border-right: 1px solid #999;
    }

</style>