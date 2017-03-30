import { AfterViewInit, Component } from '@angular/core';
import { SynthesizerService } from 'ng-webaudio-synthesizer/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  devices: any;
  deviceId: number;
  midiServiceRunning = false;
  title = 'app works!';

  private intervalDrum: any;
  private intervalNote: any;

  constructor(private synthesizerService: SynthesizerService) {}

  startPlaying() {
    this.intervalDrum = setInterval(() => {
      this.synthesizerService.triggerSample('snare');
    }, 1000);
    this.intervalNote = setInterval(() => {
      this.synthesizerService.sendNote('A#3');
    }, 2000);
  }

  stopPlaying() {
    clearInterval(this.intervalDrum);
    clearInterval(this.intervalNote);
  }
}
