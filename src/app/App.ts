import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  private current: string[] = ['mail'];
  private openKeys: string[] = ['sub1'];

  @Watch('openKeys')
  public OpenKeys(value: string[], oldValue: string[]) {
    console.log('openKeys', value);
  }

  private handleClick(e: any) {
    //
  }

  private titleClick(e: any) {
    //
  }
}
