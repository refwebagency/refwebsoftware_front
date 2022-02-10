import { ProjectType } from "./projectType";
import { Specialization } from "./specialization";

export interface TodoTemplate
{
    id: number,
    name: string,
    experience: number,
    description: string,
    time: number,
    specializationId: number,
    specialization: Specialization,
    projectTypeId: number,
    projectType: ProjectType
}