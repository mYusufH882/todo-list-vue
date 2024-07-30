<template>
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-12">
                  <div className="nav-align-top">
                    <ul className="nav nav-pills flex-column flex-md-row mb-6">
                      <li className="nav-item">
                        <a className="nav-link active" href="javascript:void(0);"
                          ><i className="bx bx-sm bx-user me-1_5"></i> Account</a
                        >
                      </li>                    </ul>
                  </div>
                  <div className="card mb-6">
                    <!-- Account -->
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-6 pb-4 border-bottom">
                        <img
                          src="/assets/img/avatars/1.png"
                          alt="user-avatar"
                          className="d-block w-px-100 h-px-100 rounded"
                          id="uploadedAvatar" />
                        <div className="button-wrapper">
                          <label for="upload" className="btn btn-primary me-3 mb-4" tabindex="0">
                            <span className="d-none d-sm-block">Upload new photo</span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden
                              accept="image/png, image/jpeg" />
                          </label>
                          <button type="button" className="btn btn-outline-warning account-image-reset mb-4">
                            <i className="bx bx-reset d-block d-sm-none"></i>
                            <span className="d-none d-sm-block">Reset</span>
                          </button>

                          <div>Allowed JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-4">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row g-6">
                          <div className="col-md-6">
                            <label for="firstName" className="form-label">First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value="John"
                              autofocus />
                          </div>
                          <div className="col-md-6">
                            <label for="lastName" className="form-label">Last Name</label>
                            <input className="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                          </div>
                          <div className="col-md-6">
                            <label for="email" className="form-label">E-mail</label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value="john.doe@example.com"
                              placeholder="john.doe@example.com" />
                          </div>
                          <div className="col-md-6">
                            <label for="organization" className="form-label">Organization</label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value="ThemeSelection" />
                          </div>
                        </div>
                        <div className="mt-6">
                          <button type="submit" className="btn btn-primary me-3">Simpan</button>
                          <button type="reset" className="btn btn-outline-warning">Reset</button>
                        </div>
                      </form>
                    </div>
                    <!-- /Account -->
                  </div>
                  <!-- Delete Account -->
                  <!-- <div className="card">
                    <h5 className="card-header">Delete Account</h5>
                    <div className="card-body">
                      <div className="mb-6 col-12 mb-0">
                        <div className="alert alert-warning">
                          <h5 className="alert-heading mb-1">Are you sure you want to delete your account?</h5>
                          <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation" onsubmit="return false">
                        <div className="form-check my-8 ms-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="accountActivation"
                            id="accountActivation" />
                          <label className="form-check-label" for="accountActivation"
                            >I confirm my account deactivation</label
                          >
                        </div>
                        <button type="submit" className="btn btn-danger deactivate-account" disabled>
                          Deactivate Account
                        </button>
                      </form>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
</template>

<script>
export default {
    name: 'UserView',
}
</script>