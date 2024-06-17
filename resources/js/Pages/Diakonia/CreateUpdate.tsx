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
import { formatStringToRupiah } from "@/lib/utilities";
import { Textarea } from "@/Components/ui/textarea";
export default function Create({ auth }: PageProps) {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        birth_date: Date.now(),
        diakonia: [
            {
                diakonia_type: "",
                diakonia_amount: 0,
                notes: "",
            },
        ],
        FA: "",
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

    function getNumberFromFormattedString(str: string) {
        // Remove all non-digit characters
        const cleaned = str.replace(/\D/g, "");

        // Convert the cleaned string to a number
        const number = parseInt(cleaned, 10);

        return number;
    }
    function addBantuan() {
        setValues((values) => ({
            ...values,
            diakonia: [
                ...values.diakonia,
                {
                    diakonia_type: "",
                    diakonia_amount: 0,
                    notes: "",
                },
            ],
        }));
    }
    function removeBantuan(index: number) {
        setValues((values) => ({
            ...values,
            diakonia: values.diakonia.filter((_, i) => i !== index),
        }));
    }
    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
            <div className="flex ">
                <Button>
                    <Link href="/diakonia">Back</Link>
                </Button>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Penerima Diakonia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="first_name">Nama Depan</Label>
                                <Input
                                    id="first_name"
                                    value={values.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="last_name">Nama Belakang</Label>
                                <Input
                                    id="last_name"
                                    value={values.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone_number">
                                    Nomor Telpon
                                </Label>
                                <Input
                                    id="phone_number"
                                    value={values.phone_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Tanggal Lahir</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "justify-start text-left font-normal",
                                                !values.birth_date &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {values.birth_date ? (
                                                format(values.birth_date, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            onSelect={(e) => {
                                                setValues((values) => ({
                                                    ...values,
                                                    birth_date: e as any,
                                                }));
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex justify-between">
                                <span>Bantuan Diakonia</span>
                                <Button
                                    size="sm"
                                    className="h-8 gap-1"
                                    onClick={addBantuan}
                                >
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    Tambah Bantuan
                                </Button>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        No.
                                    </TableHead>
                                    <TableHead>Tipe</TableHead>
                                    <TableHead>Jumlah</TableHead>
                                    <TableHead>Penjelasan</TableHead>
                                    <TableHead className="text-right">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {values.diakonia.map((diakonia, index) => (
                                    <TableRow>
                                        <TableCell className="font-medium">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                onValueChange={(value) => {
                                                    setValues((values) => ({
                                                        ...values,
                                                        diakonia:
                                                            values.diakonia.map(
                                                                (d, i) => {
                                                                    if (
                                                                        i ===
                                                                        index
                                                                    ) {
                                                                        return {
                                                                            ...d,
                                                                            diakonia_type:
                                                                                value,
                                                                        };
                                                                    }
                                                                    return d;
                                                                }
                                                            ),
                                                    }));
                                                }}
                                                value={diakonia.diakonia_type}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Tipe Diakonia" />
                                                </SelectTrigger>
                                                <SelectContent id="diakonia_type">
                                                    <SelectItem value="tunai_sakit">
                                                        Tunai Sakit
                                                    </SelectItem>
                                                    <SelectItem value="spp">
                                                        SPP
                                                    </SelectItem>
                                                    <SelectItem value="kontrakan_kos">
                                                        Kontrakan/Kos
                                                    </SelectItem>
                                                    <SelectItem value="tunai_rt">
                                                        Tunai RT
                                                    </SelectItem>
                                                    <SelectItem value="bpjs">
                                                        BPJS
                                                    </SelectItem>
                                                    <SelectItem value="renovasi">
                                                        Renovasi
                                                    </SelectItem>
                                                    <SelectItem value="lapas_panti">
                                                        Lapas / Panti
                                                    </SelectItem>
                                                    <SelectItem value="sembako">
                                                        Sembako
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Input
                                                id={"diakonia_amount" + index}
                                                value={formatStringToRupiah(
                                                    diakonia.diakonia_amount.toString()
                                                )}
                                                onChange={(e) => {
                                                    let value = e.target.value;
                                                    let numValue =
                                                        getNumberFromFormattedString(
                                                            value
                                                        );
                                                    setValues((values) => ({
                                                        ...values,
                                                        diakonia:
                                                            values.diakonia.map(
                                                                (d, i) => {
                                                                    if (
                                                                        i ===
                                                                        index
                                                                    ) {
                                                                        return {
                                                                            ...d,
                                                                            diakonia_amount:
                                                                                numValue,
                                                                        };
                                                                    }
                                                                    return d;
                                                                }
                                                            ),
                                                    }));
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Textarea
                                                onChange={(e) => {
                                                    let value = e.target.value;
                                                    setValues((values) => ({
                                                        ...values,
                                                        diakonia:
                                                            values.diakonia.map(
                                                                (d, i) => {
                                                                    if (
                                                                        i ===
                                                                        index
                                                                    ) {
                                                                        return {
                                                                            ...d,
                                                                            notes: value,
                                                                        };
                                                                    }
                                                                    return d;
                                                                }
                                                            ),
                                                    }));
                                                }}
                                                value={diakonia.notes}
                                            />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant={"destructive"}
                                                onClick={() =>
                                                    removeBantuan(index)
                                                }
                                            >
                                                Hapus
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Button type="submit">Submit</Button>
            </form>
        </AuthenticatedLayout>
    );
}
