import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, repeat } from 'rxjs';
import { QuotePdf } from '../models/quotePdf';

@Injectable({
  providedIn: 'root'
})
export class QuotePdfService {

  constructor(

    private http : HttpClient,
    private route : Router

  ) { }

  /**
   * @returns un observale la liste de devis
   */
  getQuotesPdf(): Observable<QuotePdf[]>
  {
    return this.http.get<QuotePdf[]>("https://localhost:9001/quotepdf").pipe(
      delay(1000),repeat()
    );
  }
}
