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
    dataTabs: {}
  }),
  mounted () {
    // this.$axios
    //   .get('https://warzone.ga:5002/api/mw/getlifetimestats/mp/Lems%2321439')
    //   .then(response => {
    //     console.log(response.data.lifeTimeStatsMP)
    //     this.dataTabs = response.data.lifeTimeStatsMP
    //   });
    this.getApi()
  },
  methods: {
    getApi () {
      this.$api.get('getlifetimestats/mp/Lems%2321439').then((response) => {
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
