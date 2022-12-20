import { Component,EventEmitter, OnInit,Input,Output } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'cad-unsuscribe-dialog',
  templateUrl: './unsuscribe-dialog.component.html',
  styleUrls: ['./unsuscribe-dialog.component.scss']
})
export class UnsuscribeDialogComponent implements OnInit {

  @Input() TitleModal:string;
  @Input() Question:string;
  @Input() id:number;
  @Input() BtnOk:any;
  @Input() BtnCancel:any;
  @Output() Unsuscribe=new EventEmitter<any>();
  

  MessageError:string="El campo es obligatorio"
  SubTitleLabel:string='Observaciones';
  unsuscribeForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    const ColorModal=document.getElementById('titleModal');
    // console.log(this.ColorHeaderModal);
    // ColorModal.style.backgroundColor=this.ColorHeaderModal;
  }

  private createForm(): void {
    this.unsuscribeForm =this._fb.group({
      id: new FormControl,
      detail: new FormControl('', [Validators.required]),
    });
  }
  Ok(){
    if(this.unsuscribeForm?.valid){
      console.log("Valido");
      this.unsuscribeForm.value.id=this.id;
      this.Unsuscribe.emit(this.unsuscribeForm);
    }
    console.log("No valido");
  }

}
