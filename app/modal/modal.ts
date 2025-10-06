import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  standalone: true
})
export class Modal {
  
  @Input() message = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
