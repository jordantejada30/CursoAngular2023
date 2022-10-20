import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string = "https://thumbs.dreamstime.com/b/fondo-rosado-valentine-day-gift-card-holiday-del-extracto-del-modelo-84498207.jpg";
  public titulo: string = "Curso de Angular con Interpolación";

  constructor() { }

  ngOnInit(): void {
  }

}
