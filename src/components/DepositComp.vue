<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import ConnectedNav from './ConnectedNavigator.vue'
</script>

<template>
  <ConnectedNav msg=""/>
  <div class="home">
    <h1 class="page-title">Deposit</h1>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Choose an amount</template>

      First of all, choose the amount you want to deposit
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Send it to us</template>

      You can send it to this address  <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Address</a> We will send you an email when we will have receive the amount
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>You receive it on the platform</template>

      When we receive the money, we will fill your account on the platform
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Invest</template>

      You can now invest and buy every crypto you want 
    </WelcomeItem>
  </div>
</template>
