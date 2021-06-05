import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stockCard = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string {
    const localizedVariationString = this.stockCard.variation.toLocaleString();
    const prefix = this.stockCard.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }

}
