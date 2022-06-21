import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  MENU_ITEMS: any;
  screenWidth: number = window.innerWidth;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ){}

  @ViewChild("drawer") drawer: any
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 500) {
      this.drawer.close()
    }else{
      this.drawer.open()
    }
    console.log(this.screenWidth)
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe((params) =>{
      this.MENU_ITEMS = Object.keys(this.activatedRoute.snapshot.data["menu"])
    })
  }

  openPage(page: any){
    this.route.navigate([`/${page}`])
  }
}
