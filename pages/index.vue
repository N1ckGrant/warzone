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
  components: { Tabs },
  data: () => ({
    dataTabs: {},
    user: {
      battleID: 'Lems%2321439'
    }
  }),
  mounted () {
    this.getApi()
  },
  methods: {
    getApi () {
      this.$api.get(`${'getlifetimestats/mp/' + this.battleID}`).then((response) => {
        console.log(response, 'response')
        this.dataTabs = response.data.lifeTimeStatsMP
      })
      // console.log(this.$api)
    }
  }
}
</script>

<style>

</style>
