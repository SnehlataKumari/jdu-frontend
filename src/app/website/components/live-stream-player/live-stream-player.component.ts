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
  @Input() streamUrl = '';
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
      // libraryLocation: "https://cdn.myth.theoplayer.com/f4d6ebbe-f1af-4acf-9e12-6a5e1dd09394"
      libraryLocation: "https://cdn.myth.theoplayer.com/243aba29-704d-4b69-b7bf-1cfcab4dbaf2"
    });

    console.log(this.streamUrl);

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
