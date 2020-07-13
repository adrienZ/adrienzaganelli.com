<template>
  <div class="container">
    <c-header />

    <pre>
    {{$store.state.projects}}
    </pre>
  </div>
</template>


<script>
import cHeader from '@/components/c-header.vue'
import cHomeBlock from '@/components/c-home-block.vue'

export default {
  components: {
    cHeader,
    cHomeBlock
  }
}
</script>
