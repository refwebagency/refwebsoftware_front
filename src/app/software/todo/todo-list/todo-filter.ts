import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../../models/todo";

@Pipe({
    name:'todoFilter' //nom du filtre qui est dans le component html
})
export class TodoListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(todo: Todo[], searchTerm: string): Todo[]
    {
        if(!todo || !searchTerm)
        {
            
            return todo;
        }

            return todo.filter(todo => 
            todo.status.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}