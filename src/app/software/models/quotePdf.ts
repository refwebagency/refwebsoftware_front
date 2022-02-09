import { Project } from "./project";
import { TodoTemplate } from "./todoTemplate";

export interface QuotePdf
{
    id: number,
    project: Project,
    todoTemplates: TodoTemplate[]
}