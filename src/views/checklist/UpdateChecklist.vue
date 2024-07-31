<template>
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <ChecklistForm :form="form" isUpdate="true" @submit="updateChecklist" />
        </div>
    </div>
</template>

<script>
import ChecklistForm from '@/components/forms/checklist/ChecklistForm.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'UpdateChecklist',
    components: {
        ChecklistForm
    },
    setup() {
        const isAuthenticated = ref(false)
        const router = useRouter()
        const route = useRoute()

        const form = ref({
            title: '',
            description: ''
        }) 
        
        const token = localStorage.getItem('token')
        
        if (!token) {
            router.push({ name: 'login' })
            return
        }

        const fetchChecklist = async () => {
            const id = route.params.id
            await axios.get(import.meta.env.VITE_BACKEND_URL + `/checklist/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                isAuthenticated.value = true
                form.value = response.data.data
                console.log(response.data.data)
            })
            .catch((error) => {
                console.error(error)
                router.push({ name: 'check-list' })
            })
        }

        const updateChecklist = async(data) => {
            const id = route.params.id
            try {
                isAuthenticated.value = true
                await axios.put(import.meta.env.VITE_BACKEND_URL + `/checklist/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                router.push('/check-list')
            } catch(error) {
                console.error(error);
            }
        };

        onMounted(fetchChecklist)

        return {
            isAuthenticated,
            form,
            updateChecklist,
        }
    }
}
</script>