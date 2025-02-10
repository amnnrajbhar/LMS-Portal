import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number[] = [];
  ngOnInit(): void {
    this.calculateTotalPages();
  }
  //Pagination Part 
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.calculateTotalPages();
      // Add your logic to fetch data for the specific page
    }
  }
  calculateTotalPages() {
    debugger;
    const totalRecords = 10;//this.userList.length;
    const pages = Math.ceil(totalRecords / this.itemsPerPage);
    this.totalPages = Array.from({ length: pages }, (_, i) => i + 1);
  }
}
