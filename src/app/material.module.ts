import {NgModule} from '@angular/core';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: []
})
export class MaterialModule {
}
