export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Paginated<T> {
    data: T[],
    current_page: number,
    last_page: number,
    total: number,
    path: string,
    last_page_url: string,
    next_page_url: string,
    prev_page_url: string,
    first_page_url: string
}

export interface FamilyAltar {
    id: number;
    name: string;
    identification_number: string;
    address: string;
    birth: string;
    phone: string;
    fa_member: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
