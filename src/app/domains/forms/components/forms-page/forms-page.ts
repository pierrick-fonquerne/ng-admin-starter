import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.scss',
})
export class FormsPage {
  private fb = inject(FormBuilder);

  // Basic inputs form
  basicForm = this.fb.group({
    fullName: [''],
    email: [''],
    password: [''],
    age: [null as number | null],
    bio: [''],
  });

  // Selection form
  selectionForm = this.fb.group({
    country: [''],
    role: [''],
    notifications: [true],
    newsletter: [false],
    theme: ['light'],
  });

  // Validation showcase form
  validationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  });

  countries = [
    { value: 'fr', label: 'France' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'es', label: 'Spain' },
  ];

  roles = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
  ];

  onBasicSubmit(): void {
    console.log('Basic form:', this.basicForm.value);
  }

  onSelectionSubmit(): void {
    console.log('Selection form:', this.selectionForm.value);
  }

  onValidationSubmit(): void {
    if (this.validationForm.valid) {
      console.log('Validation form:', this.validationForm.value);
    } else {
      this.validationForm.markAllAsTouched();
    }
  }
}
