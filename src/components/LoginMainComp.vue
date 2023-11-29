<script setup lang="ts">
  import router from '../router'
  import { useUserStore } from '@/stores/user';
  import { storeToRefs } from 'pinia';
  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)

  const login = async (fields: any) => {
    await new Promise((r) => setTimeout(r, 1000))
    userStore.init(
      {
        firstName: fields.userName,
        lastName: "",
        age: 0,
      },
      "blablablabalbal"
    )
    router.push('/home');
  }
</script>

<template>
  <div class="login">
    <div class="login-form">
      <h1>Login</h1>

        <FormKit 
          type="form" 
          @submit="login"  
          default="{ value }"
          submit-label="Login"
        >
          <FormKit
            type="text"
            name="userName"
            id="userName"
            validation="required|length:5,16"
            label="User name"
            outer-class="login-input"
          />

          <FormKit
            type="password"
            label="Password"
            name="password"
            id="password"
            validation="required|length:8"
            outer-class="login-input"
          />
          <h4>Not yet an account ? <RouterLink to="/signup">signup</RouterLink></h4>
        </FormKit>
    </div>
  </div>

</template>

<style>
  .login {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login-form {
    padding: 50px;
    border-radius: 7.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: white;
  }

  .login-input {
    width: 300px;
  }

  .login button {
    background-color: hsla(160, 100%, 37%, 1) !important;
  }
</style>