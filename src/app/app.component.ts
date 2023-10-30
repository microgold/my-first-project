import { Component } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Stock Price Checker';
  stockSymbol = 'AAPL';
  price: number;
  stocks = ['AAPL', 'GOOGL', 'MSFT'];
  constructor(private stockService: StockService) {
    this.price = this.stockService.getStockPrice(this.stockSymbol);
  }
  onStockSelect(symbol: string): void {
    this.stockSymbol = symbol;
    this.price = this.stockService.getStockPrice(symbol);
  }
}