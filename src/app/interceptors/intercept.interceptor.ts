import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  let _NgxUiLoaderService=inject(NgxUiLoaderService );
  var activereq =0;

  if(activereq===0){
    _NgxUiLoaderService.start();
  }
  activereq++;




  return next(req).pipe(finalize(()=>{
    _stoploader();
  }));

  function _stoploader(){
    activereq--;
    if(activereq===0){
      _NgxUiLoaderService.stop();
    }
  }
};
