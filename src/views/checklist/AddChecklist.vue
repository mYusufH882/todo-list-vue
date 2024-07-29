<template>
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <ChecklistForm />
        </div>
    </div>
</template>

<script>
import ChecklistForm from '@/components/forms/checklist/ChecklistForm.vue';

export default {
    name: 'AddChecklist',
    components: {
        ChecklistForm
    }
}
</script>