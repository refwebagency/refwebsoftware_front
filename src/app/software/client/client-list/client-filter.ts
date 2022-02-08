import { Pipe, PipeTransform } from "@angular/core";
import { Client } from "../../models/client";

@Pipe({
    name:'clientFilter' //nom du filtre qui est dans le component html
})
export class ClientListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(clients: Client[], searchTerm: string): Client[]
    {
        if(!clients || !searchTerm)
        {
            //retourne tous les Clients si rien marqué dans l'input
            return clients;
        }
            /**
             * retorune tous les utilisateurs ayant des caractères
             * identiques à ceux dans l'input, lettres comparées en miniscule et
             * à chaques lettres rentrées
             */
            return clients.filter(client => 
                client.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}