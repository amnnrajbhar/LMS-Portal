import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingplandialogComponent } from 'src/app/dialog/pricingplandialog/pricingplandialog.component';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-pricingplans',
  templateUrl: './pricingplans.component.html',
  styleUrls: ['./pricingplans.component.css']
})
export class PricingplansComponent {
users: any[] = [];
  userList: any;
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
  constructor(private dialog: MatDialog, private httpservice: HttpserviceService) { }
  ngOnInit(): void {
    // this.users = [
    //   {
    //     Id: 1,
    //     fullName: 'Aman Rajbhar',
    //     userName: 'aman',
    //     course: 'Engineer',
    //     status: true,
    //     createdOn: '04/01/2025',
    //     modifiedOn: '04/01/2025'
    //   }
    // ];
    // this.userList=this.httpservice.getPricingPlanFormList();
    // console.log(this.userList);
    this.getPricingPlanList();
  }

  searchText: any;

  addPricingPlan(formData: any) {
    debugger;

    const selectedcourse = this.courseList.find(r => r.courseId === formData.course);
    const selectedStatus = this.statusList.find(r => r.statusId === formData.status);
    let insertData =
    {
      id: formData.id,
      planName: formData.planName,
      price: formData.price,
      courseId: selectedcourse.courseId,
      course: selectedcourse.course,
      statusId: selectedStatus.statusId,
      status: selectedStatus.status,
      createdOn: "31/01/2024",
      modifienOn: "31/01/2024"
    };
    this.httpservice.saveNewPricingPlan(insertData).subscribe(data => {
      console.log('Save new user : ' + data);
      alert('inserted New PricingPlan');
      this.getPricingPlanList();
    });
  }
  openDialog(item: any) {
    debugger;
    if (item == null) {
      const dialogRef = this.dialog.open(PricingplandialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result != "") {
          this.addPricingPlan(result);
         
        }
      });
    } else if (item != null) {
      const dialogRef = this.dialog.open(PricingplandialogComponent, {
        data: { rowItem: item }
      });

      dialogRef.afterClosed().subscribe(result => {
        //debugger;
        console.log(`Dialog result: ${result}`);
        if (result != "") {
          debugger;
          this.editPricingPlan(result);
          
        }
      });
    }
  }
  editPricingPlan(formData: any) {
    debugger;
    debugger;

    const selectedcourse = this.courseList.find(r => r.courseId === formData.course);
    let insertData =
    {
      _id: formData._id,
      fullName: formData.fullName,
      userName: formData.userName,
      courseId: selectedcourse.courseId,
      course: selectedcourse.course,
      status: true,
      createdOn: "31/01/2024",
      modifienOn: "31/01/2024"
    };
    this.httpservice.editPricingPlan(insertData,insertData._id).subscribe(data => {
      debugger;
      alert('PricingPlan Updated Successfully');
      this.getPricingPlanList();
    });
  }

  exportToExcel() {
  }

  deletePricingPlan(id: any) {
    this.httpservice.deletePricingPlan(id).subscribe(data => {
      this.getPricingPlanList();
      alert('PricingPlan Deleted Successfully');
      console.log('Delete user : ' + data);
    });
  }

  getPricingPlanList() {
    this.httpservice.getPricingPlanFormList().subscribe(data => {
      //debugger;
      this.userList = data;
      console.log(data);
    });
  }
}
