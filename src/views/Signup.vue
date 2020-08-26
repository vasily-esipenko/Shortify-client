<template>
    <div class="container">
        <SignupForm />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SignupForm from '@/components/auth/SignupForm.vue';

@Options({
  components: {
      SignupForm
  },
})

export default class Signup extends Vue {}
</script>
