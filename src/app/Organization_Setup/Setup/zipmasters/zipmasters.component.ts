import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-zipmasters',
  templateUrl: './zipmasters.component.html',
  styleUrls: ['./zipmasters.component.scss']
})
export class ZipmastersComponent implements OnInit {

  data: any = [];
  totalRecords: String;
  page: Number = 1;
  currentIndex = -1;
  organizationLists: any = [];
  public popoverTitle: string = 'Confirm Delete!';
  public popoverMessage: string = 'Are you sure? you want to delete?';

  public cancelClicked: boolean = false;

  item : any = [];




  constructor(private router: ActivatedRoute, private apiData: BackendApiService, private route: Router) { }

  ngOnInit() {
    console.log('Current Route: ' + this.router);
    this.apiData.getZipmasters().subscribe((resultlist:any)=>{
      this.apiData.getOrganizations().subscribe((orglist:any)=>{
      resultlist.forEach((result:any, index:any) => {
        result.index = index + 1;
        if(result.deleteflag === 'null'){
          for (var i=0; i<orglist.length; i++) {
            if(result.organizationId == orglist[i].id) {

              result.orgName = orglist[i].orgname;
              this.data.push(result);

            }
          }
          this.data.push(result);
        }



      });
       this.data = resultlist;
        this.organizationLists = orglist;



    })
    })
  }

}
