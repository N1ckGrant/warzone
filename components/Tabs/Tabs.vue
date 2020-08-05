<template>
  <div class="Tabs">
    <div class="Tabs-radio">
      <div class="item" :class="{active: radioTabs == 1}" @click="radioTabs = 1">
        one
      </div>
      <div class="item" :class="{active: radioTabs == 2}" @click="radioTabs = 2">
        two
      </div>
    </div>
    <div v-if="radioTabs == 1" class="Tabs-item">
      <div class="head">
        <div class="head_child caption">
          Lifetime Overview
        </div>
        <div class="head_child time">
          <v-icon style="margin-right: 3px">
            schedule
          </v-icon>
          <span>1D 20H 36M Play Time</span>
        </div>
        <div class="head_child allMatches">
          364 Matches
        </div>
      </div>
      <div class="bg">
        <img src="/img/tabs.png" alt="warzone image">
      </div>
      <div class="table">
        <div class="rate-box">
          <tips title="K/D Ratio" :int="data.kdRatio" />
          <tips title="Wins" :int="data.wins" />
          <tips title="Win %" :int="`${data.winPercent + '%'}`" />
          <tips title="Kills" :int="data.kills" />
          <tips title="Avg. Life" :int="data.avgLifeTime" />
        </div>
        <div class="rows">
          <div class="item">
            <div class="title">
              Losses
            </div>
            <div class="val">
              {{ data.losses }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Ties
            </div>
            <div class="val">
              {{ data.ties }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              W/L Ratio
            </div>
            <div class="val">
              {{ data.winLossRatio }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Deaths
            </div>
            <div class="val">
              {{ data.deaths }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Assists
            </div>
            <div class="val">
              {{ data.assists }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Suicides
            </div>
            <div class="val">
              {{ data.suicides }}
            </div>
          </div>
        </div>
        <div class="rows">
          <div class="item">
            <div class="title">
              Total Score
            </div>
            <div class="val">
              {{ data.totalScore }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Score/Match
            </div>
            <div class="val">
              {{ data.scorePerGame }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Score/Minute
            </div>
            <div class="val">
              {{ data.scorePerMinute }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              1shot-1kills
            </div>
            <div class="val">
              {{ data.oneShotOneKills }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Long range kills
            </div>
            <div class="val">
              {{ data.longshotKills }}
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="rows">
          <div class="item">
            <div class="title">
              Longest Win Streak
            </div>
            <div class="val">
              {{ data.longestWinStreak }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Longest Kill Streak
            </div>
            <div class="val">
              {{ data.recordKillStreak }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Highest Kills/Match
            </div>
            <div class="val">
              {{ data.recordKillsInAMatch }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best K/D
            </div>
            <div class="val">
              {{ data.bestKD }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best Score/Match
            </div>
            <div class="val">
              {{ data.bestScore }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best Score/Min
            </div>
            <div class="val">
              {{ data.bestSPM }}
            </div>
          </div>
        </div>
      </div>
      <div class="info-statistics">
        <slider :labels="[{name: `${'Misses' + '(' + data.misses + ')'}`, color: '#E4E4E4'}, {name: `${'Hits' + '(' + data.hits + ')'}`, color: '#E8BE11'}]" :value="data.hitsPercent" title="Accuracy" />
        <slider :labels="[{name: `${'Headshots' + '(' + data.headshots + ')'}`, color: '#E8BE11'}]" :value="data.HSPercent" title="Headshot Accuracy" />
      </div>
    </div>
  </div>
</template>

<script>
import Tips from '../Tips'
import Slider from './slider'
export default {
  name: 'Tabs',
  components: { Slider, Tips },
  props: {
    data: {
      type: Object
    }
  },
  data: () => ({
    radioTabs: 1
  })
}
</script>

<style lang="scss" scoped>
  .Tabs {
    border-radius: 10px;
    overflow: hidden;
    &-radio{
      align-items: center;
      width: 100%;
      height: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .item{
        font-size: 16px;
        color: black;
        height: 100%;
        line-height: 28px;
        justify-content: center;
        display: flex;
        background-color: #E4E4E4;
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
          background-color: #bdbbbb;
        }
        &.active{
          background-color: #7F828B;
        }
      }
    }
    .head{
      padding: 24px 20px;
      background: #E4E4E4;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .caption{
        font-family: Sansation;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 27px;

        color: #000000;
      }
      .time, .allMatches{
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
        display: flex;
        align-items: center;

        color: #808080;
      }
      &_child{
        margin-right: 40px;
        &:last-child{
          margin-right: 0px;
        }
      }
    }
    .bg{
      height: 125px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .table{
      background-color: #F7F7F7;
      padding: 24px;
      border-radius: 0px 0px 10px 10px;
      .line{
        width: 100%;
        height: 1px;
        background-color: #E4E4E4;
      }
    }
    .rate-box{
      margin-top: -50px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 20px;
    }
    .rows{
      padding: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      .item{
        .title{
          font-family: Sansation;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;

          color: #808080;
        }
        .val{
          font-family: Sansation;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 27px;

          color: #000000;

        }
      }
    }
    .info-statistics{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      margin-top: 40px;
      background: #F7F7F7;
      border-radius: 10px;
      padding: 24px;
    }
  }
</style>
