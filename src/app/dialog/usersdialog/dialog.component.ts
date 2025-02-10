import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../../components/users/users.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userForm: FormGroup;
  roleList: any[] = [
    { roleId: '1', role: 'Developer' },
    { roleId: '2', role: 'UI/UX Developer' },
    { roleId: '3', role: 'Manager' },
    { roleId: '4', role: 'Student' }
  ];

  statusList: any[] = [
    { statusId: '1', status: 'Active' },
    { statusId: '2', status: 'Inactive' }
  ];
  isUserForm: Boolean = true;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public usersFormData: any) {
    this.userForm = this.fb.group({
      _id: [null],
      fullName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    debugger;
    if (this.usersFormData) {
      let alreadyUserForm = this.usersFormData.rowItem;
      // this.userForm.patchValue(alreadyUserForm);
      this.userForm.patchValue({
        fullName: alreadyUserForm.fullName,
        userName: alreadyUserForm.userName,
        role: alreadyUserForm.roleId,
        roleId: alreadyUserForm.role,
        _id: alreadyUserForm._id
        // Ensure this matches the `mat-option` value
      });
    }
  }


}
