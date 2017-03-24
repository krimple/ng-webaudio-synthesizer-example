import { Component } from '@angular/core';
import { PipelineService } from 'ng-webaudio-synthesizer/dist/synthesizer';
import { TriggerSample } from 'ng-webaudio-synthesizer/dist/synthesizer/models';
import { NoteInputService } from 'ng-webaudio-synthesizer/dist/synthesizer/services/pipeline/inputs/note-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  constructor(pipelineService: PipelineService, noteInputService: NoteInputService) {
    pipelineService.begin();
    setInterval(() => {
      pipelineService.synthStream$.next(new TriggerSample('snare', 100));
    }, 1000);
    setInterval(() => {
      noteInputService.emitNote(('A#3'));
    }, 2000);
  }
}
