import { Component, Output, EventEmitter, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  result = null;
  error = null;

  sizes = [
    {
      key: 'Pequeña',
      value: '1'
    },
    {
      key: 'Mediana',
      value: '2'
    },
    {
      key: 'Grande',
      value: '3'
    }
  ];

  countries = [{
    key: 'España',
    value: '1'
  },
  {
    key: 'Portugal',
    value: '2',
  },
  {
    key: 'Francia',
    value: '3',
  },
  {
    key: 'Italia',
    value: '4'
  }];



  @Input() edit;

  @Output() save = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  get name() {
    return this.form.get('name');
  }
  get createdAt() {
    return this.form.get('createdAt');
  }
  get size() {
    return this.form.get('size');
  }
  get address() {
    return this.form.get('address');
  }
  get country() {
    return this.form.get('country');
  }
  get phone() {
    return this.form.get('phone');
  }
  get description() {
    return this.form.get('description');
  }

  initForm(edit: any = {}) {
    this.form = this.formBuilder.group({
      id: [edit.id],
      name: [edit.title, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      createdAt: [edit.publishDate, Validators.required],
      size: [edit.size, Validators.required],
      address: [edit.address, Validators.required],
      country: [edit.country, Validators.required],
      phone: [edit.phone, Validators.required],
      description: [edit.description, Validators.required]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.edit.currentValue){
      this.initForm(this.edit);
    }
  }

  ngOnInit() {
    this.initForm();
  }

  onSave(value) {
    this.save.emit(value);
    this.form.reset();
    this.result = true;
    this.error = false;
  }
}
