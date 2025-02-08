import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PricingplansComponent } from 'src/app/components/pricingplans/pricingplans.component';

@Component({
  selector: 'app-pricingplandialog',
  templateUrl: './pricingplandialog.component.html',
  styleUrls: ['./pricingplandialog.component.css']
})
export class PricingplandialogComponent {
  pricingPlansForm!: FormGroup;
  courseList: any[] = [
    { courseId: '1', course: 'Developer' },
    { courseId: '2', course: 'UI/UX Developer' },
    { courseId: '3', course: 'Manager' },
    { courseId: '4', course: 'Student' }
  ];

  statusList: any[] = [
    { statusId: '1', status: 'Active' },
    { statusId: '2', status: 'Inactive' }
  ];
  isUserForm: Boolean = true;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PricingplansComponent>,
    @Inject(MAT_DIALOG_DATA) public PricingplansFormData: any) {
    this.pricingPlansForm = this.fb.group({
      _id: [null],
      planName: ['', Validators.required],
      price: ['', Validators.required],
      course: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    debugger;
    if (this.PricingplansFormData) {
      let alreadyUserForm = this.PricingplansFormData.rowItem;
      // this.userForm.patchValue(alreadyUserForm);
      this.pricingPlansForm.patchValue({
        planName: alreadyUserForm.planName,
        price: alreadyUserForm.price,
        course: alreadyUserForm.courseId,
        courseId: alreadyUserForm.course,
        status: alreadyUserForm.statusId,
        statusId: alreadyUserForm.status,
        _id: alreadyUserForm._id
        // Ensure this matches the `mat-option` value
      });
    }
  }
}
