import { Pipe, PipeTransform } from "@angular/core";
import { Client } from "../../models/client";

@Pipe({name: 'clientFilter'})

export class ClientSearch implements PipeTransform 
{
    transform(value: Client[], searchClient: string): Client[]
    {
        if(!value || !searchClient)
        {
            return value;
        }

        return value.filter(client =>
            client.lastName.toLowerCase().indexOf(searchClient.toLowerCase()) !== -1);
    }
}