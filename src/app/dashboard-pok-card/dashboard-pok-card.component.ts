import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-dashboard-pok-card',
  templateUrl: './dashboard-pok-card.component.html',
  styleUrls: ['./dashboard-pok-card.component.css']
})
export class DashboardPokCardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}