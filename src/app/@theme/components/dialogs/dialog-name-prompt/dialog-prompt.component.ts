import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-prompt',
  templateUrl: 'dialog-prompt.component.html',
  styleUrls: ['dialog-prompt.component.scss'],
})
export class DialogPromptComponent {

  constructor(protected ref: NbDialogRef<DialogPromptComponent>) {}

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }
}
