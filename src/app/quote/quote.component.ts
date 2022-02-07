import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'yes we can', 'barack obama','silvano',0,0,new Date(2021,3,14)),
    new Quote(2,'No human is limited','eliud kipchoge','silvano',0,0,new Date(2020,3,14)),
    new Quote(3,'That which does not kill us makes us stronger.','Friedrich Nietzsche','silvano',0,0,new Date(2020,3,14)),
    new Quote(4,'Life is what happens when you’re busy making other plans','John Lennon','silvano',0,0,new Date(2020,3,14)),
    new Quote(5,'When the going gets tough, the tough get going.','joe Kennedy','silvano',0,0,new Date(2020,3,14)),
    new Quote(6,'You must be the change you wish to see in the world.','Mahatma Gandhi','silvano',0,0,new Date(2020,3,14)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
    }
  }
  up(i:number){
    var quote = this.quotes[i];
    quote.upvote +=1;
  }
  down(i:number){
    var quote = this.quotes[i];
    quote.downvote +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
