<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="card overflow-hidden mb-6">
                    <div class="card-header">
                        <h2>{{ todos.title }}</h2>
                        <p>
                            <small>{{ todos.description }}</small>
                        </p>
                    </div>
                    <div class="card-body" id="vertical-example">
                        <div v-for="item in todos.items" :key="item.id" class="my-3">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                            <span class="badge bg-label-info">{{ item.status }}</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button @click="gotoBack" class="btn btn-warning">Kembali</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'TodoList',
    setup() {
        const router = useRouter()
        const route = useRoute()
        const id = route.params.id

        const todos = ref({})

        const fetchTodo = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/checklist/${id}/item`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                todos.value = response.data.data
                console.log(todos.value)
            } catch(error) {
                console.error(error);
            }
        }

        const gotoBack = () => {
            router.push({ name: 'check-list' })
        }

        onMounted(() => {
            fetchTodo()
        })

        return {
            todos,
            gotoBack
        }
    }
}    
</script>

