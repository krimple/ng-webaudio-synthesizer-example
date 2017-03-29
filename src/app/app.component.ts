import { AfterViewInit, Component } from '@angular/core';
import { PipelineService } from 'ng-webaudio-synthesizer';
import { NoteInputService } from 'ng-webaudio-synthesizer';
import { MidiInputService } from 'ng-webaudio-synthesizer';
import { DrumMachineInputService, DrumTrigger } from 'ng-webaudio-synthesizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements AfterViewInit {
  devices: any;
  deviceId: number;
  midiServiceRunning = false;
  title = 'app works!';

  private intervalDrum: any;
  private intervalNote: any;

  constructor(private midiInputService: MidiInputService,
              private pipelineService: PipelineService,
              private drumMachineInputService: DrumMachineInputService,
              private noteInputService: NoteInputService) { }

  ngAfterViewInit() {
    this.midiInputService.elaborateDevices()
      .then((devices) => { this.devices = devices; console.log(`devices loaded!`); console.dir(devices); });
  }


  // TODO - update to real form, not hackity hack
  logChanges() {
    console.log('logChanges - value for dev ids', this.deviceId);
 }

  startPipeline() {
    this.pipelineService.begin();
  }

  endPipeline() {
    this.pipelineService.end();
  }


  startMidiWithDevice(device: any) {
    if (this.deviceId) {
      this.midiServiceRunning = true;
      this.midiInputService.beginMidiInput([{ id: device, type: 'midi' }]);
    }
  }


  stopMidi() {
    this.midiInputService.endMidiInput();
    this.midiServiceRunning = false;
  }



  startPlaying() {
    this.intervalDrum = setInterval(() => {
      this.drumMachineInputService.playTrigger(DrumTrigger.SNARE);
    }, 1000);
    this.intervalNote = setInterval(() => {
      this.noteInputService.emitNoteByName(('A#3'));
    }, 2000);
  }

  stopPlaying() {
    clearInterval(this.intervalNote);
    clearInterval(this.intervalDrum);
  }
}
