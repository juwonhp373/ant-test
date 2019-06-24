<template>
  <v-container>
    <v-layout>
      <h1>apple</h1>
      <a-affix :offsetTop="this.top">
        <a-button type="primary"
                  @click="()=>{this.top += 10}">Affix top</a-button>
      </a-affix>
      <a-affix :offsetTop="120"
               @change="change">
        <a-button>120px to affix top</a-button>
      </a-affix>
    </v-layout>
    <a-row>
      <a-col class="align-center"
             :span="12">col-12</a-col>
      <a-col class="align-center"
             :span="12">col-12</a-col>
    </a-row>
    <a-row style="height: 100px;">
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
    </a-row>
    <a-row type="flex"
           style="height: 200px;">
      <a-col :span="4">
        <p class="height-100">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-50">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-120">col-4</p>
      </a-col>
      <a-col :span="4">
        <p class="height-80">col-4</p>
      </a-col>
    </a-row>
    <a-row style="height: 500px;">
      <div id="components-affix-target"
           class="scrollable-container"
           ref="container">
        <div class="background">
          <a-affix :target="()=> this.$refs.container">
            <a-button>
              Fixed at top of the container
            </a-button>
          </a-affix>
        </div>
      </div>
    </a-row>
    <a-row style="height: 500px;">
      <a-affix :offsetBottom="this.bottom">
        <a-button></a-button>
      </a-affix>
    </a-row>
  </v-container>
</template>

<script src='./ant-test.ts'/>

<style lang="scss">
@import './ant-test.scss';
@import '@/style/_common.scss';
</style>
