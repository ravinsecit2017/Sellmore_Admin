import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendApiService } from 'src/app/services/backend-api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

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
  routeId: any;
  zipmastersForm: FormGroup;
  name: String;
  userSubmitted: boolean;

  constructor(private route: ActivatedRoute,
              private apiData: BackendApiService,
              private router:Router,
              private fb: FormBuilder,
              private alertify: AlertifyService) {

   }

  ngOnInit(): void {

    this.zipmastersForm = new FormGroup({
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
      this.zipmastersForm.patchValue(data);

     })
   }

  }


  onSubmit() {
    console.log("Submit", this.zipmastersForm.value);
    let flag = this.zipmastersForm.value;
    if (flag.organizationId == '' || flag.organizationId == null) {
      this.alertify.warning('Please select Organization Name');
    } else if (flag.name == '' || flag.name == null) {
      this.alertify.warning('Please enter name');
    } else {
    flag.deleteflag = "null";
    this.userSubmitted = true;
    this.apiData.createZipmaster(this.zipmastersForm.value).subscribe(zipdata => {
      this.data = zipdata;
      this.alertify.success('Congrats! Zipmasters has been created');
      this.router.navigate(['/zipmasters']);
    }, error => {
    this.alertify.warning('oopss! Something went wrong');

    });
  }
  }

  onUpdate() {
    let flag = this.zipmastersForm.value;
    if (flag.organizationId == '' || flag.organizationId == null) {
      this.alertify.warning('Please select Organization Name');
    } else if (flag.name == '' || flag.name == null) {
      this.alertify.warning('Please enter name');
    } else {
    flag.id = this.routeId;
    this.apiData.updateZipmaster(this.zipmastersForm.value).subscribe(zipdata => {
     // this.data = zipdata;
     this.alertify.success('Congrats! Zipmasters has been updated');
     this.router.navigate(['/zipmasters'])
    }, error => {
      this.alertify.warning('oopss! Something went wrong');
    });
    }
  }

}
