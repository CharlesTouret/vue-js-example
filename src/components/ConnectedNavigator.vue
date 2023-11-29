<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import router from '@/router';
  import { useUserStore } from '@/stores/user';
  import { storeToRefs } from 'pinia';
  import MainButton from './MainButton.vue'

  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)
  defineProps<{
    msg: string
  }>()
  const logout = async () => {
      userStore.empty()
      router.push('/login');
  }
</script>

<template>
  <div class="navigator">
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/market">Market</RouterLink>
      <RouterLink to="/deposit">Deposit</RouterLink>
    </nav>
    <div class="navigator-right-section">
      Good morning {{ user.firstName }} !
      <div>
            <MainButton text="Logout" @on-click-button="logout" />
            <!-- <button @click="logout">Logout</button> -->
      </div>
    </div>
  </div>
</template>


<style scoped>

.navigator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px lightgray solid;
}

.navigator-right-section {
  display: flex;
  gap: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
    header {
    display: flex;
    flex-direction: column;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
