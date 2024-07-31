<template>
    <div className="col-xxl">
        <div className="card mb-6">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Form Checklist</h5>
                <small className="text-muted float-end">Default label</small>
            </div>
            <div className="card-body">
                <form @submit.prevent="handleSubmit">
                    <div className="row mb-6">
                        <label className="col-sm-2 col-form-label" for="title">Judul</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                v-model="form.title"
                                placeholder="John Doe" />
                        </div>
                    </div>
                    <div className="row mb-6">
                        <label className="col-sm-2 col-form-label" for="description">Deskripsi</label>
                        <div className="col-sm-10">
                            <textarea
                                id="description"
                                v-model="form.description"
                                className="form-control"
                                placeholder="Hi, Do you have a moment to talk Joe?"
                                aria-label="Hi, Do you have a moment to talk Joe?"
                                aria-describedby="basic-icon-default-message2"></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary mx-1">Simpan</button>
                            <a href="/check-list" v-if="isUpdate" className="btn btn-warning"> Kembali</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChecklistForm',
    props: {
        form: {
            type: Object,
            required: true
        },
        isUpdate: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', this.form)
        }
    }
}
</script>