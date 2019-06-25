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
    <div class="display-f align-center">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item href="">First-Step</a-breadcrumb-item>
        <a-breadcrumb-item href="">Second-Step</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="display-f align-center">
      <a-breadcrumb>
        <span slot="separator"
              style="color: orange;">--</span>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item href="">First-Step</a-breadcrumb-item>
        <a-breadcrumb-item href="">Second-Step</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
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
        <a-dropdown :placement="placement">
          <a-button>Affix bottom ({{ placement }})</a-button>
          <a-menu slot="overlay">
            <a-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="http://localhost:8080/about">to About</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="http://localhost:8080/">to Home</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="http://localhost:8080/antTest">to AntTest</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-affix>
      <a-affix :offsetBottom="100"
               @change="change">
        <a-dropdown-button @click="handleButtonClick">Dropdown Button
          <a-menu slot="overlay"
                  @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user" />1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="star" />2nd menu item</a-menu-item>
            <a-menu-item key="3">
              <a-icon type="heart" />3rd menu item</a-menu-item>

          </a-menu>
        </a-dropdown-button>
      </a-affix>
    </a-row>
  </v-container>
</template>

<script src='./ant-test.ts'/>

<style lang="scss">
@import './ant-test.scss';
@import '@/style/_common.scss';
</style>
