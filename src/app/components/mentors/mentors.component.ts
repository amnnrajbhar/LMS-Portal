import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/usersdialog/dialog.component';
import { ExcelServiceService } from 'src/app/services/ExcelService/excel-service.service';
import { HttpserviceService } from 'src/app/services/HttpService/httpservice.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent {
users: any[] = [];
  userList: any;
  roleList: any[] = [
    { roleId: '1', role: 'Developer' },
    { roleId: '2', role: 'UI/UX Developer' },
    { roleId: '3', role: 'Manager' },
    { roleId: '4', role: 'Student' }
  ];
  constructor(private dialog: MatDialog, private httpservice: HttpserviceService,private excelService: ExcelServiceService) { }
  ngOnInit(): void {
    // this.users = [
    //   {
    //     Id: 1,
    //     fullName: 'Aman Rajbhar',
    //     userName: 'aman',
    //     role: 'Engineer',
    //     status: true,
    //     createdOn: '04/01/2025',
    //     modifiedOn: '04/01/2025'
    //   }
    // ];
    // this.userList=this.httpservice.getUserFormList();
    // console.log(this.userList);
    this.getUserList();
  }

  searchText: any;

  addUser(formData: any) {
    debugger;

    const selectedRole = this.roleList.find(r => r.roleId === formData.role);
    let insertData =
    {
      id: formData.id,
      fullName: formData.fullName,
      userName: formData.userName,
      roleId: selectedRole.roleId,
      role: selectedRole.role,
      status: true,
      createdOn: "31/01/2024",
      modifienOn: "31/01/2024"
    };
    this.httpservice.saveNewUser(insertData).subscribe(data => {
      console.log('Save new user : ' + data);
      alert('inserted New User');
      this.getUserList();
    });
  }
  openDialog(item: any) {
    debugger;
    if (item == null) {
      const dialogRef = this.dialog.open(DialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result != "") {
          this.addUser(result);
         
        }
      });
    } else if (item != null) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: { rowItem: item }
      });

      dialogRef.afterClosed().subscribe(result => {
        //debugger;
        console.log(`Dialog result: ${result}`);
        if (result != "") {
          debugger;
          this.editUser(result);
          
        }
      });
    }
  }
  editUser(formData: any) {
    debugger;
    debugger;

    const selectedRole = this.roleList.find(r => r.roleId === formData.role);
    let insertData =
    {
      _id: formData._id,
      fullName: formData.fullName,
      userName: formData.userName,
      roleId: selectedRole.roleId,
      role: selectedRole.role,
      status: true,
      createdOn: "31/01/2024",
      modifienOn: "31/01/2024"
    };
    this.httpservice.editUser(insertData,insertData._id).subscribe(data => {
      debugger;
      alert('User Updated Successfully');
      this.getUserList();
    });
  }

  deleteUser(id: any) {
    this.httpservice.deleteUser(id).subscribe(data => {
      this.getUserList();
      alert('User Deleted Successfully');
      console.log('Delete user : ' + data);
    });
  }

  getUserList() {
    this.httpservice.getUserFormList().subscribe(data => {
      //debugger;
      this.userList = data;
      console.log(data);
    });
  }
  exportToExcel(): void {
    // debugger;
    this.excelService.exportAsExcelFile(this.userList, 'Mentors');
  }
  menuActive: boolean = false;

  receiveMessage($event:any) {
    //debugger;
    this.menuActive = $event;
    //alert(this.menuActive);
  }
}
