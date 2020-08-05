<template>
  <section class="container">
    <div>
      <Tabs :data="dataTabs" />
    </div>
  </section>
</template>

<script>
import Tabs from '../components/Tabs/Tabs'
export default {
  components: { Tabs }
}
</script>

<style>

</style>
