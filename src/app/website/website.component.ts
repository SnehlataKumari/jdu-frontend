import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveStreamService } from '../admin-dashboard/services/live-stream.service';
declare var window: any;
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: [
    './website.component.scss'
  ]
})
export class WebsiteComponent implements OnInit, OnDestroy, AfterViewInit {

  $intervalRef: Subscription;
  liveRailyStatus = '';
  isStreamLive = false;

  constructor(
    private _liveStream: LiveStreamService
  ) { }

  ngOnInit(): void {
    this.$intervalRef = this._liveStream.getLiveRailyStatus().subscribe(state => {
      this.liveRailyStatus = state;
      // if (state === 'started' && !this.isStreamLive) {
      //   this.fetchIsStreamLive();
      // }

      // if (state !== 'started') {
      //   this.isStreamLive = false;
      // }
    })

    // this.$intervalRef = this._liveStream.isStreamLive().subscribe(event => {
    //   console.log(event.status);
    //   if (event.status === 200) {
    //     this.isStreamLive = true;
    //   }
    // });

  }

  async fetchIsStreamLive() {
    console.log('Fetching');
    
    fetch('https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/nrdmshkv/640/chunklist.m3u8').then(event => {
      if(event.status == 200) {
        this.isStreamLive = true;
      } else {
        this.isStreamLive = false;
      }
    });
  }
  
  ngOnDestroy() {
    // this.unloadAssets();
    this.$intervalRef && this.$intervalRef.unsubscribe();
  }

  ngAfterViewInit() {
    this.loadJsSliderFile();
  }

  /**
   * TODO: Fix this later, Also bullet buttons are not working.
   */
  loadJsSliderFile() {

    console.log('1');
    
    window.jssor_1_slider_init = function () {
      var jssor_1_SlideoTransitions = [
        [{ b: -1, d: 1, ls: 0.5 }, { b: 0, d: 1000, y: 5, e: { y: 6 } }],
        [{ b: -1, d: 1, ls: 0.5 }, { b: 200, d: 1000, y: 25, e: { y: 6 } }],
        [{ b: -1, d: 1, ls: 0.5 }, { b: 400, d: 1000, y: 45, e: { y: 6 } }],
        [{ b: -1, d: 1, ls: 0.5 }, { b: 600, d: 1000, y: 65, e: { y: 6 } }],
        [{ b: -1, d: 1, ls: 0.5 }, { b: 800, d: 1000, y: 85, e: { y: 6 } }],
        [{ b: -1, d: 1, ls: 0.5 }, { b: 500, d: 1000, y: 195, e: { y: 6 } }],
        [{ b: 0, d: 2000, y: 30, e: { y: 3 } }],
        [{ b: -1, d: 1, rY: -15, tZ: 100 }, { b: 0, d: 1500, y: 30, o: 1, e: { y: 3 } }],
        [{ b: -1, d: 1, rY: -15, tZ: -100 }, { b: 0, d: 1500, y: 100, o: 0.8, e: { y: 3 } }],
        [{ b: 500, d: 1500, o: 1 }],
        [{ b: 0, d: 1000, y: 380, e: { y: 6 } }],
        [{ b: 300, d: 1000, x: 80, e: { x: 6 } }],
        [{ b: 300, d: 1000, x: 330, e: { x: 6 } }],
        [{ b: -1, d: 1, r: -110, sX: 5, sY: 5 }, { b: 0, d: 2000, o: 1, r: -20, sX: 1, sY: 1, e: { o: 6, r: 6, sX: 6, sY: 6 } }],
        [{ b: 0, d: 600, x: 150, o: 0.5, e: { x: 6 } }],
        [{ b: 0, d: 600, x: 1140, o: 0.6, e: { x: 6 } }],
        [{ b: -1, d: 1, sX: 5, sY: 5 }, { b: 600, d: 600, o: 1, sX: 1, sY: 1, e: { sX: 3, sY: 3 } }]
      ];

      var jssor_1_options = {
        $AutoPlay: 1,
        $LazyLoading: 1,
        $CaptionSliderOptions: {
          $Class: window.$JssorCaptionSlideo$,
          $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
          $Class: window.$JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: window.$JssorBulletNavigator$,
          $SpacingX: 20,
          $SpacingY: 20
        }
      };

      var jssor_1_slider = new window.$JssorSlider$("jssor_1", jssor_1_options);

      /*#region responsive code begin*/

      var MAX_WIDTH = 1600;

      function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
          window.setTimeout(ScaleSlider, 30);
        }
      }

      ScaleSlider();

      window.$Jssor$.$AddEvent(window, "load", ScaleSlider);
      window.$Jssor$.$AddEvent(window, "resize", ScaleSlider);
      window.$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
      /*#endregion responsive code end*/
    };
    window.jssor_1_slider_init();
  }

}
