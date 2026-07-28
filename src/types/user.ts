export interface User {
    id: number;
    firebaseUid: string;
    email: string;
    name: string | null;

    createdAt: string;
    updatedAt: string;
}