import { Pipe, PipeTransform } from "@angular/core";
import { TodoTemplate } from "../../models/todoTemplate";

@Pipe({
    name:'todoTemplateFilter' //nom du filtre qui est dans le component html
})
export class TodoTemplateListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(todotemplates: TodoTemplate[], searchTerm: string): TodoTemplate[]
    {
        if(!todotemplates || !searchTerm)
        {
            
            return todotemplates;
        }

        
            return todotemplates.filter(todotemplate => 
            todotemplate.specialization.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}