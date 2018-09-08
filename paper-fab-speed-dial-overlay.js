import '@polymer/polymer/polymer-legacy.js';
import { IronOverlayBehavior } from '@polymer/iron-overlay-behavior/iron-overlay-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
        <slot></slot>
`,

  is: 'paper-fab-speed-dial-overlay',

  behaviors: [
      IronOverlayBehavior
  ]
});
