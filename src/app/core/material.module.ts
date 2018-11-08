import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDatepickerModule, MatInputModule,
  MatTableModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
  MatGridListModule, MatTabsModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule,
} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    MatTabsModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
})
export class CustomMaterialModule { }
