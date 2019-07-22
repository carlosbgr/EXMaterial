import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  languages: any[] = [];

  constructor(
    private _translateService: TranslateService,
    private _http: HttpClient,
    private _toastr: ToastrService,
    ) {
    this._translateService.setDefaultLang('es');
    this.getJSON('../assets/i18n/languages.json').subscribe((lan: any) => {
      for (let i = 0 ; i < lan.length; i += 1) {
        this.languages.push(lan[i]);
      }
    });
  }

  public getJSON(json: string): Observable<any> {
    return this._http.get(json);
  }

  public switchLanguage(event: any) {
    this._translateService.use(event.target.selectedOptions[0].id);
  }
}
