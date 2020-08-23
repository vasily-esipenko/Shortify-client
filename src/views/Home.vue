<template>
    <div class="continer">
        <h1>Get a short url</h1>
        <LinkForm />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LinkForm from '@/components/LinkForm.vue';

@Options({
  components: {
      LinkForm,
  },
})
export default class Home extends Vue {}
</script>
