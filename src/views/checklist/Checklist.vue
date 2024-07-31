<template>
    <div class="container-xxl flex-grow-1 container-p-y">
      <!-- Text alignment -->
      <h5 class="pb-1 mb-6">Checklist Anda</h5>
      <div v-if="isLoading" className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span class="visually-hidden">Memuat...</span>
        </div>
      </div>
      <div v-else>
        <div v-if="items.length === 0" class="text-center">No data available</div>
        <div class="row mb-12 g-6">
          <CardChecklist 
            v-for="(item, index) in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :description="item.description"
            @hapusChecklist="handleHapusChecklist"
          />
        </div>
      </div>
      <!--/ Text alignment -->
    </div>
  </template>
  
  <script>
  import CardChecklist from '@/components/forms/checklist/CardChecklist.vue';
  import axios from 'axios';
  
  export default {
    name: 'Checklist',
    components: {
      CardChecklist
    },
    data() {
      return {
        items: [],
        isLoading: true
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      async fetchItems() {
        this.isLoading = true;
        try {
          const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/checklist', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          this.items = response.data.data;
        } catch (error) {
          console.error(error);
        } finally {
            this.isLoading = false
        }
      },
      async handleHapusChecklist(id) {
        if (id) {
          try {
            this.isLoading = true;
            await axios.delete(import.meta.env.VITE_BACKEND_URL + `/checklist/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            this.fetchItems();
          } catch (error) {
            console.error(error);
          } finally {
            this.isLoading = false
          }
        } else {
          console.log('Checklist not found !!!');
        }
      }
    }
  };
  </script>
  