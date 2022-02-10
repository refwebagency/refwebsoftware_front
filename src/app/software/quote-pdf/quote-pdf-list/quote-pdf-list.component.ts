import { Component, OnInit } from '@angular/core';
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

  constructor(

    private myService: QuotePdfService

  ) { }

  ngOnInit(): void {

    this.myService.getQuotesPdf().subscribe(pdf => this.quotesPdf = pdf)
  }

}
