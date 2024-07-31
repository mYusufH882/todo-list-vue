<template>
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <button @click="gotoChecklistTodo(id)" class="btn btn-primary mx-1">Lihat</button>
                <button @click="editChecklist(id)" class="btn btn-warning mx-1">Edit</button>
                <button @click.prevent="hapusChecklist(id)" class="btn btn-danger mx-1">
                    <span  v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span v-if="!loading">Hapus</span>
                </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'CardChecklist',
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      loading: {
        type: Boolean,
        required: true
      }
    },
    setup(props, { emit }) {
      const router = useRouter();
  
      const editChecklist = (id) => {
        router.push({ name: 'updateChecklist', params: { id: id } });
      };
  
      const hapusChecklist = (id) => {
        emit('hapusChecklist', id);
      };

      const gotoChecklistTodo = (id) => {
        router.push({ name: 'todolist', params: { id: id } })
      };
  
      return {
        editChecklist,
        hapusChecklist,
        gotoChecklistTodo
      };
    }
  };
  </script>
  