import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-zipmasters-create',
  templateUrl: './zipmasters-create.component.html',
  styleUrls: ['./zipmasters-create.component.scss']
})
export class ZipmastersCreateComponent implements OnInit {
  organizationLists: any = [];
  data: any = [];
  public zipmasterId: number;
  btnvisiblity: boolean;
  route1: string;
  @Input() hideCreate : boolean;
  routeId: any;
  addzipmasters: FormGroup;

  constructor(private route: ActivatedRoute, private apiData: BackendApiService, private router:Router) {

   }

  ngOnInit(): void {

    this.addzipmasters = new FormGroup({
      organizationId: new FormControl(),
      name: new FormControl(),

    })


    this.btnvisiblity = true;
    this.apiData.getOrganizations().subscribe((orglist:any)=>{

      this.organizationLists = orglist;
    })

   console.log("Router", this.route.snapshot.url[1].path);

   if (this.route.snapshot.url[1].path == 'create') {
     this.btnvisiblity = true;
   } else {
     this.btnvisiblity = false;
     this.routeId=this.route.snapshot.url[1].path;
     console.log("RouteId: ", this.routeId);
     this.apiData.getZipmastersById(this.routeId).subscribe((data:any) => {
      this.addzipmasters.patchValue(data);

     })
   }

  // this.route.paramMap.subscribe(params => {
  //   const zipId = +params.get('id');
  //   if(zipId) {
  //     this.
  //   }
  // });



  }


  createZipmaster() {
    console.log("Submit", this.addzipmasters.value);
    let flag = this.addzipmasters.value;
    flag.deleteflag = "null";
    this.apiData.createZipmaster(this.addzipmasters.value).subscribe(zipdata => {
      this.data = zipdata;
      this.router.navigate(['/zipmasters'])
    }, error => {
    alert("Something went wrong");

    });
  }

  updateZipmaster() {
    let updateId = this.addzipmasters.value;
    updateId.id = this.routeId;
    this.apiData.updateZipmaster(this.addzipmasters.value).subscribe(zipdata => {
     // this.data = zipdata;
     this.router.navigate(['/zipmasters'])
    }, error => {
      alert("Something went wrong");
  });

  }

}
