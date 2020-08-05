<template>
  <div class="item slider">
    <div class="title">
      {{ title }}
    </div>
    <div class="body">
      <div class="procent">
        {{ value }}%
      </div>
      <div class="labels">
        <div v-for="(item, index) in labels" :key="index" class="labels-item">
          <div class="color-labels" :style="{'background-color': item.color}" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="slider" :style="{'background-color': colorTwo}">
      <div class="range" :style="{width: `${value + '%'} `, 'background-color': colorOne}" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    title: {
      type: String
    },
    value: {
      type: Number
    },
    colorOne: {
      type: String,
      default: '#E8BE11'
    },
    colorTwo: {
      type: String,
      default: '#E4E4E4'
    },
    labels: Array
  }
}
</script>

<style lang="scss"  scoped>
  .slider{
    padding: 5px;
    width: 100%;
    .title{
      font-family: Sansation;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 27px;
      /* identical to box height */

      color: #000000;
      margin-bottom: 5px;
    }
    .body{
      display: flex;
      .procent{
        margin-right: 40px;
        font-family: Sansation;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 45px;
        /* identical to box height */

        color: #000000;
      }
      .labels{
        display: flex;
        flex-direction: column;
        &-item{
          display: flex;
          align-items: center;
          .color-labels{
            margin-right: 10px;
            width: 27px;
            height: 10px;
            border-radius: 20px;
          }
          span{
            font-family: Sansation;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */

            color: #000000;
          }
        }
      }
    }
    .slider{
      border-radius: 20px;
      height: 12px;
      width: 100%;
      padding: 0px;
      .range{
        border-radius: 20px;
        height: 100%;
      }
    }
  }
</style>
