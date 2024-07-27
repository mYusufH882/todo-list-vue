<template>
     <div className="container mt-5 justify-content-center align-items-center">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div className="mb-3">
                                <label for="email" className="form-label">Email : </label>
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
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Login</button>
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
                email: '',
                password: ''
            }
        },
        methods: {
            handleSubmit() {
                console.log('Email : ', this.email)
                console.log('Password : ', this.password)
            }
        }
    }
</script>