<template>
    <nav
        class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar">
        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
            <a class="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                <i class="bx bx-menu bx-md"></i>
            </a>
        </div>

        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

            <ul class="navbar-nav flex-row align-items-center ms-auto">
                <!-- User -->
                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                        class="nav-link dropdown-toggle hide-arrow p-0"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                        <img src="/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                    </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="#">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar avatar-online">
                                            <img src="/assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-0">John Doe</h6>
                                        <small class="text-muted">Admin</small>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="dropdown-divider my-1"></div>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/user">
                                <i class="bx bx-user bx-md me-3"></i><span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <div class="dropdown-divider my-1"></div>
                        </li>
                        <li>
                            <button class="dropdown-item" @click="signOut">
                                <i class="bx bx-power-off bx-md me-3"></i><span>Log Out</span>
                            </button>
                        </li>
                    </ul>
                </li>
                <!--/ User -->
                </ul>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'Navbar',
    setup() {
        const router = useRouter();

        const signOut = async () => {
            try {
                await axios.post(import.meta.env.VITE_BACKEND_URL + '/logout', {}, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            
                localStorage.removeItem('token')

                router.push('/login')
            } catch(error) {
                console.error('Error during logout:', error);
            }
        };
        
        return {
            signOut
        }
    }
}
</script>