<template>
    <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
                <div className="container mt-5 justify-content-center align-items-center">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="app-brand justify-content-center">
                                        <h2>Register</h2>
                                    </div>
                                    <form @submit.prevent="handleSubmit">
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                v-model="name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                v-model="email"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label for="password" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                v-model="password"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label for="confirmPassword" className="form-label">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                v-model="confirmPassword"
                                                required
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </form>

                                    <p className="text-center mt-4">
                                        <RouterLink to="/login">
                                            <span>Sudah punya akun</span>
                                        </RouterLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            handleSubmit() {
                if (this.password !== this.confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }
                console.log('Name:', this.name);
                console.log('Email:', this.email);
                console.log('Password:', this.password)
            }
        }
    }
</script>