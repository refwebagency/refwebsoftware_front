import { Pipe, PipeTransform } from "@angular/core";
import { ProjectType } from "../../models/projectType";

@Pipe({
    name:'projectTypeFilter' //nom du filtre qui est dans le component html
})
export class ProjectTypeListFilterPipe implements PipeTransform
{
    // defini les valeurs à filtrer
    transform(projectTypes: ProjectType[], searchTerm: string): ProjectType[]
    {
        if(!projectTypes || !searchTerm)
        {
            //retourne tous les types de projets si rien marqué dans l'input
            return projectTypes;
        }
            /**
             * retorune tous les types de projets ayant des caractères
             * identiques à ceux dans l'input, lettres comparées en miniscule et
             * à chaques lettres rentrées
             */
            return projectTypes.filter(user => 
                user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}