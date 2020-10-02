import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  constructor(private http: HttpClient) {}

  getPrice(token: any): Promise<any> {
    return this.http
      .get(
        '//idcamp-api.herokuapp.com/api/v1/paymodes?filter[where][deleteFlag]=null&access_token=' +
          token
      )
      .toPromise()
      .then(response => response);
  }

  // getUserUrl() {
  //   return '//idcamp-api.herokuapp.com/api/v1/users';
  // }

  getUserUrl(usrname: string, usrpwd: string, accesstoken: string) {
    return (
      '//idcamp-api.herokuapp.com/api/v1/users?filter[where][deleteflag]=null&filter[where][username]=' +
      usrname +
      '&access_token=' +
      accesstoken
    );
  }

  // getUser(token: any, usrname: string): Promise<any> {
  //   return this.http
  //     .get(
  //       '//idcamp-api.herokuapp.com/api/v1/users?filter[where][deleteflag]=null&access_token=' +
  //         token +
  //         '&filter[where][username]=' +
  //         usrname
  //     )
  //     .toPromise()
  //     .then(response => response);
  // }

  url = "http://idcamp-api.herokuapp.com/api/v1/";

  // getZipmasters(token: any): Promise<any> {
  //   return this.http
  //     .get(
  //       '//idcamp-api.herokuapp.com/api/v1/zipmasters?filter[where][deleteflag]=' + 'null' + '&access_token=' +
  //         token
  //     )
  //     .toPromise()
  //     .then(response => response);
  // }


getZipmasters() {
  return this.http.get(this.url + 'zipmasters?filter[where][deleteflag]=' + 'null');
}

getZipmastersById(id) {
  return this.http.get(this.url + 'zipmasters' + '/' + id);
}

createZipmaster(zipmasters: any) {
  return this.http.post(this.url + 'zipmasters', zipmasters);
}

updateZipmaster(zipmasters:any) {
  return this.http.put(this.url + 'zipmasters'+ '/' + zipmasters.id, zipmasters);
}

deleteZipmaster(id:any) {
  return this.http.delete(this.url + 'zipmasters'+ '/' + id);
}



getOrganizations() {
  return this.http.get(this.url + 'organizations?filter[where][deleteflag]=' + 'null');
}

}
