import { Directive, EventEmitter, ElementRef,
        HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() moouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event:any ){
    this.moouseSobre.emit( true );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event:any ){
    this.moouseSobre.emit( false );
  }

}
