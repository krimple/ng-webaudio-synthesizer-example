This sandbox demonstrates using the `ng-webaudio-synthesizer` TypeScript module
for generating audio sounds and drum samples.

What I did:

```text
npm install --save ng-webaudio-synthesizer
cp -R node_modules/ng-webaudio-synthesizer/assets/drums src/assets/
cp node_modules/midi-device-mappings.json src/assets/
```

Next, edit your `midi-device-mappings.json` file and salt to taste. 

Look at `app.module.ts` and `app.component.ts` to see how we bootstrap the
module.

