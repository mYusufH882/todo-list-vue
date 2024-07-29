<template>
    <div classname="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
                <div className="container mt-5 justify-content-center align-items-center">
                   <div className="row justify-content-center">
                       <div className="col-md-6">
                           <div className="card px-sm-6 px-0">
                               <div className="card-body">
                                    <div className="app-brand justify-content-center">
                                        <h1>Login</h1>
                                    </div>
                                    <h4 className="mb-1">Welcome to TodoList App ! 👋</h4>
                                    <p className="mb-6">The greatest app for make better todo activities and increase your productivity !!!</p>
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

                                    <p className="text-center mt-4">
                                        <RouterLink to="/register">
                                            <span>Buat akun baru disini</span>
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