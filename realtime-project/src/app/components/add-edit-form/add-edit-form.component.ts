import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core.service';
import { SubmissionsService } from 'src/app/services/submissions.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss'],
})
export class AddEditFormComponent implements OnInit {
  submissionForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _submissionService: SubmissionsService,
    private _dialogRef: MatDialogRef<AddEditFormComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.submissionForm = this._fb.group({
      date: '',
      technology:"",
      vendor: '',
      email: '',
      mobile: '',
      client: '',
      implementation: '',
      lead: '',
      student: '',
      recruiter: '',
      payrate: '',
      submitted: '',
    });
  }
  get technology() {
    return this.submissionForm.get("technology");
  }
  get lead() {
    return this.submissionForm.get("lead");
  }
  ngOnInit(): void {
    this.submissionForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.submissionForm.valid) {
      if (this.data) {
        this._submissionService
          .updateSubmission(this.data.id, this.submissionForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._submissionService
          .addSubmission(this.submissionForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee added successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
    }
  }
}
