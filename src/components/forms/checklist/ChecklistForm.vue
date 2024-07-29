<template>
    <div className="col-xxl">
        <div className="card mb-6">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Form Checklist</h5>
                <small className="text-muted float-end">Default label</small>
            </div>
            <div className="card-body">
                <form>
                    <div className="row mb-6">
                        <label className="col-sm-2 col-form-label" for="basic-default-name">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" />
                        </div>
                    </div>
                    <div className="row mb-6">
                        <label for="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select className="form-select" id="status" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-6">
                        <label className="col-sm-2 col-form-label" for="basic-default-message">Deskripsi</label>
                        <div className="col-sm-10">
                            <textarea
                                id="basic-default-message"
                                className="form-control"
                                placeholder="Hi, Do you have a moment to talk Joe?"
                                aria-label="Hi, Do you have a moment to talk Joe?"
                            aria-describedby="basic-icon-default-message2"></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChecklistForm'
}
</script>