export default interface Expense {
    category: string;
    amount: number;
    date: string;
    description: string;
    account: string;
    receiver: string;
    id: number;
}
export enum Category {
    FOOD = 'Food',
    TRANSPORTATION = 'Transportation',
    ENTERTAIMENT = 'Entertainment',
    SERVICES = 'Services',
    HEALTH = 'Health',
    OTHER = 'Other',
}
