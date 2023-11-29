<script setup lang="ts">

  const signup = async (fields: any) => {
    await new Promise((r) => setTimeout(r, 1000))
    alert(JSON.stringify(fields))
  }
</script>

<template>
  <div class="signup">
    <div class="signup-form">
      <h1>Signup</h1>

      <FormKit 
        type="form" 
        @submit="signup"  
        default="{ value }"
        submit-label="Signup"
      >
        <FormKit
          type="text"
          name="userName"
          id="userName"
          validation="required|length:5,16"
          label="User name"
          outer-class="signup-input"
        />

        <FormKit
          type="password"
          label="Password"
          name="password"
          id="password"
          validation="required|length:8"
          outer-class="signup-input"
        />

        <FormKit
          type="password"
          label="Confirm password"
          name="confitmPassword"
          id="confitmPassword"
          validation="required|length:8"
          outer-class="signup-input"
        />
      </FormKit>
    </div>
  </div>
</template>

<style>
  .signup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .signup-form {
    padding: 50px;
    border-radius: 7.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: white;
  }

  .signup-input {
    width: 300px;
  }

  .signup button {
    background-color: hsla(160, 100%, 37%, 1) !important;
  }
</style>