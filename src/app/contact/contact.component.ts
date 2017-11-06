import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
// import {SpinnerComponent} from '../spinner/spinner';  

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      account: ['', Validators.required],
      name: ['', Validators.required],
      amount: ['', [Validators.required, CustomValidators.validateNumber]],
      country: ['', Validators.required] 
    });
  }
  submitForm(): void {
  
    document.getElementById( 'loader' ).style.display = 'block';
    console.log(this.contactForm);
    setTimeout(function() {
      document.getElementById( 'loader' ).style.display = 'none';
      alert('payment  completed  successful ')
    }, 500);
   
  }
}
