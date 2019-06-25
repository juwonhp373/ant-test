import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';

@Component({})
export default class AntTest extends Vue {
  private top: number = 10;
  private bottom: number = 10;

  private placement: string = 'topCenter';

  private handleButtonClick(e: any) {
    //
  }

  private handleMenuClick(e: any) {
    //
  }

  private change(affixed: any) {
    //
  }
}
