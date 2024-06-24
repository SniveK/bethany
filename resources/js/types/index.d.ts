export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    profile: Profile;
    roles: Role[];
}

export interface Profile {
    id: number;
    phone: string;
    gender: string;
    nij: string;
    address: string;
}

export interface Role {
    id: number;
    name: string;
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

export interface Diakonia {
    id: number;
    created_at: string;
    status: string;
    requester_first_name: string;
    requester_last_name: string;
    requester_phone_number: string;
    requester_birth_date: string;
    requester_help: {
        type: string;
        amount: number;
        notes: string;
    }[];
    request_date: string;
    user: User;
    family_altar: FamilyAltar;
}

export interface FamilyAltar {
    id: number;
    created_at: string;
    name: string;
    address: string;
    leader_start_date: string;
    user: User;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
