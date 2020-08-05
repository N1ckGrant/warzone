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
    <div v-if="radioTabs === 1" class="Tabs-item">
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
          <tips title="K/D Ratio" :int="MP.kdRatio" />
          <tips title="Wins" :int="MP.wins" />
          <tips title="Win %" :int="`${MP.winPercent + '%'}`" />
          <tips title="Kills" :int="MP.kills" />
          <tips title="Avg. Life" :int="MP.avgLifeTime" />
        </div>
        <div class="rows">
          <div class="item">
            <div class="title">
              Losses
            </div>
            <div class="val">
              {{ MP.losses }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Ties
            </div>
            <div class="val">
              {{ MP.ties }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              W/L Ratio
            </div>
            <div class="val">
              {{ MP.winLossRatio }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Deaths
            </div>
            <div class="val">
              {{ MP.deaths }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Assists
            </div>
            <div class="val">
              {{ MP.assists }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Suicides
            </div>
            <div class="val">
              {{ MP.suicides }}
            </div>
          </div>
        </div>
        <div class="rows">
          <div class="item">
            <div class="title">
              Total Score
            </div>
            <div class="val">
              {{ MP.totalScore }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Score/Match
            </div>
            <div class="val">
              {{ MP.scorePerGame }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Score/Minute
            </div>
            <div class="val">
              {{ MP.scorePerMinute }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              1shot-1kills
            </div>
            <div class="val">
              {{ MP.oneShotOneKills }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Long range kills
            </div>
            <div class="val">
              {{ MP.longshotKills }}
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
              {{ MP.longestWinStreak }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Longest Kill Streak
            </div>
            <div class="val">
              {{ MP.recordKillStreak }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Highest Kills/Match
            </div>
            <div class="val">
              {{ MP.recordKillsInAMatch }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best K/D
            </div>
            <div class="val">
              {{ MP.bestKD }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best Score/Match
            </div>
            <div class="val">
              {{ MP.bestScore }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              Best Score/Min
            </div>
            <div class="val">
              {{ MP.bestSPM }}
            </div>
          </div>
        </div>
      </div>
      <div class="info-statistics">
        <slider :labels="[{name: `${'Misses' + '(' + MP.misses + ')'}`, color: '#E4E4E4'}, {name: `${'Hits' + '(' + MP.hits + ')'}`, color: '#E8BE11'}]" :value="MP.hitsPercent" title="Accuracy" />
        <slider :labels="[{name: `${'Headshots' + '(' + MP.headshots + ')'}`, color: '#E8BE11'}]" :value="MP.HSPercent" title="Headshot Accuracy" />
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
  data: () => ({
    radioTabs: 1,
    MP: {},
    WZ: {},
    user: {
      battleID: 'Lems%2321439'
    }
  }),
  async mounted () {
    await this.getApi()
  },
  methods: {
    getApi () {
      this.$api.get(`${'getlifetimestats/mp/' + this.user.battleID}`).then((response) => {
        console.log(response, 'response')
        this.MP = response.data.lifeTimeStatsMP
      })
      this.$api.get(`${'getlifetimestats/wz/' + this.user.battleID}`).then((response) => {
        console.log(response, 'response WZ')
        this.WZ = response.data.lifeTimeStatsWZ
      })
      // console.log(this.$api)
    }
  }
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
