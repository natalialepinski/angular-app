import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ PhotoComponent ], //private
    exports: [ PhotoComponent ], //public
    imports: [ HttpClientModule ]
})
export class PhotosModule {
    
}