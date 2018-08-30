import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatNativeDateModule,
    MatMenuModule
  ]
})
export class AngularMaterialModule { }
