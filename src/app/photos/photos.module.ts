import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [ PhotoComponent ], //private
    exports: [ PhotoComponent ] //public
})
export class PhotosModule {
    
}