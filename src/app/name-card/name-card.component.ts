import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  // @ts-ignore
  @Input() cardName: string;
  // @ts-ignore
  @Input() email: string;
  // @ts-ignore
  @Input() phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
