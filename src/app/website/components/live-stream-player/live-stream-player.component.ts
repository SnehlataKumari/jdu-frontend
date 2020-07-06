import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from '@angular/core';
declare var THEOplayer: any;

@Component({
  selector: 'app-live-stream-player',
  templateUrl: './live-stream-player.component.html',
  styleUrls: ['./live-stream-player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveStreamPlayerComponent implements OnInit, AfterViewInit {
  
  @ViewChild('streaming', { static: false }) streamingcanvas: ElementRef; 
  @Input() streamUrl = 'https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8';
  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.startPlayer();
    }, 100);
  }

  startPlayer() {
    var element = document.querySelector(".theoplayer-container");
    // const player = new THEOplayer.Player(element, {
    var player = new THEOplayer.Player(this.streamingcanvas.nativeElement, {
      libraryLocation: "https://cdn.myth.theoplayer.com/7f6e353d-67ba-4ec5-b463-f35901c47953"
    });

    // OPTIONAL CONFIGURATION
    // Customized video player parameters
    player.source = {
      sources: [{
        "src": this.streamUrl,
        "type": "application/x-mpegurl"
      }]
    };

    setTimeout(() => {
      player.play();
    }, 1000);

    player.addEventListener('error', function (e) {
      console.log(e);
    })
    window['player'] = player;
  }
}
