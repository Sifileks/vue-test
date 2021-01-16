<template>
  <div id="app">
    <div class="container">
      <div class="column">
        <button 
        @click="openModal" 
        class="open_modal"
        >
          Добавить
        </button>
        <ListTemplate 
        :rows="rows"
        @sortRows="sortRows"
        />
      </div>
      <div class="column">
        <ModalTemplate 
        v-if="isModalVisible"
        @closeModal="closeModal"
        @addRow="addRow"
        :rows="rows"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListTemplate  from '@/components/List/ListTemplate.vue';
import ModalTemplate from '@/components/Modal/ModalTemplate.vue';

export default {
  name: 'app',
  data() {
    return {
      isModalVisible: false,
      rows: []
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addRow(row) {

      let findParentRow = this.rows.find(element => (element.id === row.chief));

      if (row.chief)
      {
        let index = 0;
        let spliceIndex;

        this.rows.forEach(element => {
          
          if (row.chief === element.id) 
          {
            spliceIndex = index;
          }

          index++;
        });

        this.rows.splice(spliceIndex + 1, 0, row);

        if (findParentRow.depthLevel >= 0)
        {
          row.depthLevel = findParentRow.depthLevel + 1;
        }

      } else {
        this.rows.push(row);
        
        row.depthLevel = 0;
      }
      const jsonDecodeArray = JSON.stringify(this.rows);

      localStorage.setItem('rows', jsonDecodeArray);
    },
    sortRows() {
        const sort = this.rows.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        
        return 0;
      });
    }
  },
  components: {
    ListTemplate,
    ModalTemplate
  },
  mounted() {
      const jsonUncodeArray = JSON.parse(localStorage.rows);

      this.rows = jsonUncodeArray;
  }
}
</script>

<style>
  body {
    font-family: monospace;
  }
  * {
    padding: 0;
    margin: 0;
    outline: none; 
  }
  .container {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .column {
    margin-top: 30px;
    width: calc(50% - 50px);
  }
  .open_modal {
    margin-bottom: 15px;
    border: none;
    background: #c100bb;
    color: #fff;
    padding: 8px 15px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
</style>