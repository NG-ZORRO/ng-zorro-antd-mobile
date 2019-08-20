import { Observable } from 'rxjs';

import { ModalComponent } from './modal.component';

export abstract class ModalRef<T = any, R = any> {
  abstract afterOpen: Observable<void>;
  abstract afterClose: Observable<R>;

  abstract close(result?: R): void;
  abstract destroy(result?: R): void;
  abstract triggerOk(): void;
  abstract triggerCancel(): void;
  abstract getElement(): HTMLElement;
  abstract getInstance(): ModalComponent;
}
