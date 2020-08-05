<template>
  <div class="tips">
    <div class="title">
      {{ title }}
    </div>
    <div class="procent">
      {{ int }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  props: ['title', 'int'],
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
  .tips {
    background-color: #EEEEEE;
    border-radius: 10px;
    padding: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-family: Sansation;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;

      color: #808080;
    }
    .procent{
      font-family: Sansation;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 45px;

      color: #000000;
    }
  }
</style>
