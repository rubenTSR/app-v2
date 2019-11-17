export interface Task {
    id: string | number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    users: string[];
}