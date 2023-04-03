import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteacnt',
  templateUrl: './deleteacnt.component.html',
  styleUrls: ['./deleteacnt.component.css']
})
export class DeleteacntComponent implements OnInit {
@Input() item:any|undefined
@Output()onCancel=new EventEmitter()
@Output()onDelete=new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }
  cancel(){
    this.onCancel.emit()
  }
deleted(){
  this.onDelete.emit(this.item)
}
}
