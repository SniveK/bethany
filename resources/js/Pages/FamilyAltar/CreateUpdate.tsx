import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
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
const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];
export default function Create({ auth }: PageProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [values, setValues] = useState({
        name: "",
        address: "",
        ketua: "",
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
        router.post("/diakonia", values);
    }
    return (
        <AuthenticatedLayout user={auth.user} title={"Family Altar"}>
            <Head title="Dashboard" />
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
                                            {value
                                                ? frameworks.find(
                                                      (framework) =>
                                                          framework.value ===
                                                          value
                                                  )?.label
                                                : "Pilih ketua"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Cari ketua" />
                                            <CommandList>
                                                <CommandGroup>
                                                    {frameworks.map(
                                                        (framework) => (
                                                            <CommandItem
                                                                key={
                                                                    framework.value
                                                                }
                                                                value={
                                                                    framework.value
                                                                }
                                                                onSelect={(
                                                                    currentValue
                                                                ) => {
                                                                    setValue(
                                                                        currentValue ===
                                                                            value
                                                                            ? ""
                                                                            : currentValue
                                                                    );
                                                                    setOpen(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        value ===
                                                                            framework.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {
                                                                    framework.label
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

                <Button type="submit">Submit</Button>
            </form>
        </AuthenticatedLayout>
    );
}
