import { Component, Input } from '@angular/core';
import { JsonElementNode } from 'tree-model';

@Component({
  selector: 'hrc-json-property-name',
  template: `<pre [ngStyle]="{'display':'inline'}">{{name()}}</pre>`
})
export class JsonPropertyNameComponent {

  @Input()
  node: JsonElementNode;

  name() {
    return this.node.name ? ('"' + this.node.name + '":') : ('');
  }
}
