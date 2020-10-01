import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   $scope.activities11 = Restangular.all('activities?filter[where][organizationId]=' + $window.sessionStorage.organizationId + '&filter[where][enddate]=' + $scope.todaydate + '&filter[where][notificationflag]=false').getList().then(function (activity) {
//     // console.log('activity',  activity);
//      $scope.activities = activity;
//      $scope.activity.total = activity.length;
//  });
//$scope.activity.total = 0;

}
