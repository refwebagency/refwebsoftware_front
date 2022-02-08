import { Specialization } from "./specialization";

export interface User 
{ 
    id: number,
    name: string,
    lastName: string,
    address: string,
    phone: string,
    email: string,
    password: string,
    experience: number,
    meetId?: number,
    specializationId: number,
    specialization: Specialization
}