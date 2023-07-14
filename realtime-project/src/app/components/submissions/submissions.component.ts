import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { MatDialog } from '@angular/material/dialog';
import { SubmissionsService } from 'src/app/services/submissions.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from 'src/app/services/core.service';
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  selectedLead!: String  ;
  selectedTechnology!: String  ;

  leads:String[] | undefined;
  technologies:String[] | undefined;
  displayedColumns: string[] = [
    'id',
    'date',
    'technology',
    'vendor',
    'email',
    'mobile',
    'client',
    'implementation',
    'lead',
    'student',
    'recruiter',
    'payrate',
    'submitted',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort1!: MatSort;
  constructor(
    private _dialog: MatDialog,
    private _submissionService: SubmissionsService,
    private _coreService: CoreService
  ) {}
  ngOnInit(): void {
    
    this.getLeadsList();
    this.getTechnologiesList();
  }
  getFilterList(){
    this.getSubList();
  }
  openAddEditSubForm() {
    const dialogRef = this._dialog.open(AddEditFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getSubList();
        }
      },
    });
  }
  getLeadsList(){
    this._submissionService.getLeadsList().subscribe({
      next: (res) => {
        this.leads=res
        console.log(this.leads)
      },
      error: console.log,
    })
  }
  getTechnologiesList(){
    this._submissionService.getTechnologyList().subscribe({
      next: (res) => {
        this.technologies=res
        console.log(this.technologies)
      },
      error: console.log,
    })
  }
  getSubList() {
    console.log(this.selectedLead,this.selectedTechnology)
    this._submissionService.getSubmissionList(this.selectedLead,this.selectedTechnology).subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.sort = this.sort1;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilterLead(event: Event) {
    console.log('filter----', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterTechnology(event: Event) {
    console.log('filter----', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteSub(id: number) {
    this._submissionService.deleteSubmission(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getSubList();
      },
      error: console.log,
    });
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getSubList();
        }
      },
    });
  }
}
