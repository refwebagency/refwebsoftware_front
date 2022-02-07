import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../../models/user";

@Pipe({name: 'userFilter'})

export class UserSearch implements PipeTransform 
{
    transform(value: User[], searchUser: string): User[]
    {
        if(!value || !searchUser)
        {
            return value;
        }

        return value.filter(user =>
            user.lastName.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1);
    }
}