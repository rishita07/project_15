import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  @Input() bannerImages: Banner[];
  slideOptions = {
    slidesPerView: 1.1
  };

  constructor(public router: Router) { }

  ngOnInit() {}

  goToRestaurant(data) {
    if(data?.res_id) {
      this.router.navigate(['/', 'tabs', 'restaurants', data.res_id]);
    }
  }

}
