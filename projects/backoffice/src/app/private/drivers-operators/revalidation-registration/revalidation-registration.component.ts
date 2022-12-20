import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cad-revalidation-registration',
  templateUrl: './revalidation-registration.component.html',
  styleUrls: ['./revalidation-registration.component.scss'],
})
export class RevalidationRegistrationComponent implements OnInit {
  revalidateForm: FormGroup;
  brandMasters: any[] = [];

  constructor(private fb: FormBuilder) {
    this.revalidateForm = this.fb.group({
      category: new FormControl('', [Validators.required]),
      expeditionDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
