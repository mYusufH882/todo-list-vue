<template>
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <ChecklistForm :form="form" @submit="addChecklist" />
        </div>
    </div>
</template>

<script>
import ChecklistForm from '@/components/forms/checklist/ChecklistForm.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'AddChecklist',
    components: {
        ChecklistForm
    },
    setup() {
        const isAuthenticated = ref(false)
        const form = ref({
            title: '',
            description: ''
        })

        const router = useRouter()
        const token = localStorage.getItem('token')
        if (!token) {
            router.push({ name: 'login' })
            return
        }

        const addChecklist = async(data) => {
            try {
                isAuthenticated.value = true
                await axios.post(import.meta.env.VITE_BACKEND_URL + '/checklist', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                router.push('/check-list')
            } catch(error) {
                console.error(error);
            }
        };

        return {
            addChecklist,
            isAuthenticated,
            form,
        }
    }
}
</script>