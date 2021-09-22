import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'My Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {

  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }

}
