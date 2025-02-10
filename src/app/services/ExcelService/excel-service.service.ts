import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {
   EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
   EXCEL_EXTENSION = '.xlsx';
  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string):void {
    debugger;
    console.log(json);
    const worksheet: XLSX.WorkSheet=XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook={Sheets:{'data1': worksheet }, SheetNames: ['data1']};
    const excelBuffer: any=XLSX.write(workbook,{bookType:'xlsx', type: 'array'});

    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    debugger;
    const data: Blob=new Blob([buffer], {type: this.EXCEL_TYPE });
    
    FileSaver.saveAs(data,fileName + '_export_' + new Date().getTime() + this.EXCEL_EXTENSION);
  }

}
