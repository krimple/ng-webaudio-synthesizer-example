import { Component } from '@angular/core';
import { PipelineService } from 'ng-webaudio-synthesizer/dist/synthesizer';
import { TriggerSample } from 'ng-webaudio-synthesizer/dist/synthesizer/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(pipelineService: PipelineService) {
    pipelineService.begin();
    setInterval(() => {
      pipelineService.synthStream$.next(new TriggerSample('snare', 100));
    }, 1000);
  }
}
