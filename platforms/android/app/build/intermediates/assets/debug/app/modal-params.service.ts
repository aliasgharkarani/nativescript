import { Injectable } from '@angular/core';

@Injectable()
export class ModalParamsService {
  context: any;
  closeCallback: (...args) => any;
  // constructor(context: any, closeCallback: (...args) => any);
}
