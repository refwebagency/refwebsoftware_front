import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../../models/user";

@Pipe({
    name:'userFilter' //nom du filtre qui est dans le component html
})
export class UserListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(users: User[], searchTerm: string): User[]
    {
        if(!users || !searchTerm)
        {
            //retourne tous les users si rien marqué dans l'input
            return users;
        }
            /**
             * retorune tous les utilisateurs ayant des caractères
             * identiques à ceux dans l'input, lettres comparées en miniscule et
             * à chaques lettres rentrées
             */
            return users.filter(user => 
                user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}