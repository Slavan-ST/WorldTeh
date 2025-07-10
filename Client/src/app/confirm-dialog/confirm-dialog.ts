import { Component, Inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  templateUrl: './confirm-dialog.html',
  styleUrls: ['./confirm-dialog.css']
})

export class ConfirmDialog {

  @Input() title!: string;
  @Input() message!: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  onConfirm(): void {
    this.activeModal.close(true);
  }

  onCancel(): void {
    this.activeModal.close(false);
  }
}
