import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps, Role, User } from "@/types";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";

const PAGETITLE = "Accounts";
const SLUG = "account";

interface Form {
    new_email: string;
    new_password: string;
    name: string;
    gender: string;
    address: string;
    phone: string;
    nij: string;
    roles: number[];
}

export default function Create({ auth, roles, user }: PageProps<{ roles: Role[], user: User }>) {

    const { data, setData, post, put, processing, errors, reset } = useForm<Form>({
        new_email: user ? user.email : "",
        new_password: "",
        name: user ? user.name : "",
        gender: user ? user.profile.gender : "",
        address: user ? user.profile.address : "",
        phone: user ? user.profile.phone : "",
        nij: user ? user.profile.nij : "",
        roles: user ? user.roles.map((role) => role.id) : [],
    });

    console.log(errors);

    console.log(data);

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setData((data) => ({
            ...data,
            [key]: value,
        }));
    }

    function handleRoleSelect(roleId: number) {
        if (data.roles.includes(roleId)) {
            setData((data) => ({
                ...data,
                roles: data.roles.filter((roleId) => roleId !== roleId),
            }));
        } else {
            setData((data) => ({
                ...data,
                roles: [...data.roles, roleId],
            }));
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (user) {
            put(route("account.update", user.id));
        } else {
            post(route("account.store"));
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={PAGETITLE}>
            <Head title={PAGETITLE} />
            <div className="flex ">
                <Button>
                    <Link href={route('account.index')}>Back</Link>
                </Button>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 flex-col" autoComplete="off">
                <Card>
                    <CardHeader>
                        <CardTitle>{user ? "Perbarui" : "Buat"} {PAGETITLE}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="new_email">Email</Label>
                                <Input
                                    id="new_email"
                                    name="new_email"
                                    value={data.new_email}
                                    onChange={handleChange}
                                    autoComplete="new-email"
                                    disabled={user ? true : false}
                                />
                            </div>
                            <div>
                                <Label htmlFor="new_password">Password</Label>
                                <Input
                                    id="new_password"
                                    name="new_password"
                                    value={data.new_password}
                                    onChange={handleChange}
                                    type="password"
                                    autoComplete="new-password"
                                    disabled={user ? true : false}
                                />
                            </div>
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="gender">Gender</Label>
                                <Select onValueChange={(value) => setData('gender', value)} value={data.gender}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="L">Laki-laki</SelectItem>
                                        <SelectItem value="P">Perempuan</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    value={data.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    value={data.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="nij">NIJ</Label>
                                <Input
                                    id="nij"
                                    value={data.nij}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="roles">Roles</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="w-full">Select Roles</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {roles.map((role) => (
                                            <DropdownMenuCheckboxItem
                                                key={role.id}
                                                checked={data.roles.includes(role.id)}
                                                onCheckedChange={() => handleRoleSelect(role.id)}
                                            >
                                                {role.name}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Button type="submit" disabled={processing}>
                    Submit
                </Button>
            </form>
        </AuthenticatedLayout>
    );
}
