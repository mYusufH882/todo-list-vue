<template>
    <div className="container mt-3">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
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
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    required
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
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