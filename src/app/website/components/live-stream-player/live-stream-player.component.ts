import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
declare var THEOplayer: any;

@Component({
  selector: 'app-live-stream-player',
  templateUrl: './live-stream-player.component.html',
  styleUrls: ['./live-stream-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveStreamPlayerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.startPlayer();
    }, 100);
  }

  startPlayer() {
    const element = document.querySelector(".theoplayer-container");
    const player = new THEOplayer.Player(element, {
      libraryLocation: "https://cdn.myth.theoplayer.com/7f6e353d-67ba-4ec5-b463-f35901c47953"
    });

    // OPTIONAL CONFIGURATION
    // Customized video player parameters
    player.source = {
      sources: [{
        "src": "https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8",
        "type": "application/x-mpegurl"
      }]
    };

    player.autoplay = true;
    player.preload = 'auto';

    (document.querySelector(".vjs-big-play-button") as HTMLButtonElement).click();
    

    console.log('Played to auto play video');

    setTimeout(() => {
      (document.querySelector(".vjs-big-play-button") as HTMLButtonElement).click();
    }, 1000);
    window['player'] = player;
  }

  

}
