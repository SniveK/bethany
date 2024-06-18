import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FamilyAltar, PageProps, User } from "@/types";
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
    Check,
    ChevronsUpDown,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
    TableFooter,
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/Components/ui/command";

export default function Create({ auth, users, familyAltar }: PageProps<{ users: User[], familyAltar: FamilyAltar }>) {
    const [open, setOpen] = useState(false);
    const [usersSearch, setUsersSearch] = useState(users.map((user) => {
        return {
            id: user.id,
            value: user.name,
        };
    }));
    const { data: values, setData: setValues, post, put, processing, errors, reset } = useForm({
        name: familyAltar ? familyAltar.name : "",
        address: familyAltar ? familyAltar.address : "",
        user_id: familyAltar ? familyAltar.user.id.toString() : "",
    });

    console.log(values);

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (familyAltar) {
            put(route("family-altar.update", familyAltar.id));
        } else {
            post(route("family-altar.store"));
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Family Altar"}>
            <Head title="Family Altar" />
            <div className="flex ">
                <Button>
                    <Link href="/family-altar">Back</Link>
                </Button>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
                <Card>
                    <CardHeader>
                        <CardTitle>Buat Family Altar</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    value={values.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label>Ketua FA</Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[200px] justify-between"
                                        >
                                            {values.user_id
                                                ? users.find(
                                                    (user) =>
                                                        user.id.toString() ===
                                                        values.user_id
                                                )?.name
                                                : "Pilih ketua"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Cari ketua" />
                                            <CommandList>
                                                <CommandGroup>
                                                    {usersSearch.map(
                                                        (user) => (
                                                            <CommandItem
                                                                key={
                                                                    user.value
                                                                }
                                                                value={
                                                                    user.value
                                                                }
                                                                onSelect={(
                                                                    currentValue
                                                                ) => {
                                                                    setValues('user_id', user.id.toString())
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        values.user_id ===
                                                                            user.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {
                                                                    user.value
                                                                }
                                                            </CommandItem>
                                                        )
                                                    )}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Button type="submit" disabled={processing}>Submit</Button>
            </form>
        </AuthenticatedLayout>
    );
}
