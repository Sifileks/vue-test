<template>
    <div id="modal">
        <button 
        @click="closeModal"
        class="close_modal"
        >
        &times;
        </button>
        <h3>
            Добавление нового пользователя
        </h3>
        <ModalSubmit 
        @addRow="addRow"
        :rows="rows"
        />
    </div>
</template>

<script>
import ModalSubmit from '@/components/Modal/ModalSubmit.vue';

export default {
    name: 'modal',
    data() {
        return {
            
        }
    },
    props: [
        'rows'
    ],
    components: {
        ModalSubmit
    },
    methods: {
        closeModal() {
            this.$emit( 'closeModal' );
        },
        addRow(row) {
            this.$emit( 'addRow', row );
        }
    }
}
</script>

<style scoped>
    #modal {
        padding: 35px;
        position: relative;
        background: #c100bb;
        box-shadow: 3px 3px 12px 2px #dc3080b5;
        width: calc(100% - 70px)
    }
    .close_modal {
        cursor: pointer;
        position: absolute;
        right: 30px;
        top: 30px;
        background: none;
        border: none;
        font-size: 24px;
        color: #fff;
        text-shadow: 6px 0px 20px #ff4e98cf, -6px 0px 20px #ff4e98cf, 0px 6px 20px #ff4e98cf, 0px -6px 20px #ff4e98cf;
    }
    h3 {
        color: #fff;
        font-size: 26px;
        color: #fff;
        margin-bottom: 15px;
    }
</style>