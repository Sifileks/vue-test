<template>
    <div id="form">
        <form 
        @submit.prevent="addRow"
        >
            <div class="row">
                <div class="name">
                    Имя
                </div>
                <input type="text" 
                v-model="name"
                >
            </div>
            <div class="row">
                <div class="name">
                    Телефон
                </div>
                <input type="text" 
                v-model="telephone"
                >
            </div>
            <div class="row">
                <div class="name">
                    Начальник
                </div>
                <select 
                v-model="chief"
                >
                    <option 
                    v-for="row of rows"
                    v-if="row.name"
                    :value="row.id"
                    >
                    {{ row.name }}
                    </option> 
                </select>
            </div>
            <button class="btnComplete">
                Сохранить
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:       '',
            telephone:  '',
            chief:      '',
        }
    },
    props: [
        'rows'
    ],
    methods: {
        addRow(event) {
            if ( this.name.trim() && this.telephone.trim() ) 
            { 
                
                const newRow = {
                    id: Date.now(),
                    name: this.name,
                    telephone: this.telephone,
                    chief: this.chief
                };

                this.$emit( 'addRow', newRow );

                this.name       = '';
                this.telephone  = '';
                this.chief      = '';
            }
        }
    }
}
</script>

<style scoped>
    .row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;
    }
    .name {
        width: 30%;
        font-size: 16px;
        color: #fff;
    }
    input, select {
        width: 70%;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 2px;
        text-indent: 15px
    }
    .btnComplete {
        margin-top: 15px;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        border: navajowhite;
        font-size: 16px;
        font-weight: bold;
        color: #940090;
        cursor: pointer;
    }
</style>