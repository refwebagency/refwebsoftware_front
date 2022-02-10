import { Pipe, PipeTransform } from "@angular/core";
import { QuotePdf } from "../../models/quotePdf";

@Pipe({
    name:'quotePdfFilter' //nom du filtre qui est dans le component html
})
export class QuotePdfListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(quotesPdf: QuotePdf[], searchTerm: string): QuotePdf[]
    {
        if(!quotesPdf || !searchTerm)
        {
            
            return quotesPdf;
        }

        
            return quotesPdf.filter(quotesPdf => 
            quotesPdf.project.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}