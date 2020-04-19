import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public _opened: boolean = false;
  public _closeOnClickOutside: boolean = true;
 
  public _toggleOpened(): void {
    this._opened = !this._opened;
  }

  public _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

    };




