import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotePdf } from '../../models/quotePdf';
import { QuotePdfService } from '../quote-pdf.service';

@Component({
  selector: 'app-quote-pdf-list',
  templateUrl: './quote-pdf-list.component.html',
  styleUrls: ['./quote-pdf-list.component.scss']
})
export class QuotePdfListComponent implements OnInit {

  quotesPdf: QuotePdf[] = []
  searchTerm!: string;

  constructor(private myService: QuotePdfService) 
  { 
    this.myService.quotePdfChange.subscribe(() => {
      this.myService.getQuotesPdf().subscribe(c => this.quotesPdf = c);
      console.log("getQuotePdfs() pour sidebar2 déclenché")
    })
  }

  ngOnInit(): void {
  }

}
