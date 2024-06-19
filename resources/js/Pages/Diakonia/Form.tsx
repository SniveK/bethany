import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { PlusCircle } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Label } from "@/Components/ui/label";
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
import { format } from "date-fns";
export default function Create({
    auth,
    db_data,
    mode,
}: PageProps<{ db_data: any; mode: any }>) {
    // console.log(data);
    // var formData = {
    //     requester_first_name: "",
    //     requester_last_name: "",
    //     requester_phone_number: "",
    //     requester_birth_date: Date.now(),
    //     diakonia: [
    //         {
    //             diakonia_type: "",
    //             diakonia_amount: 0,
    //             notes: "",
    //         },
    //     ],
    //     FA: "",
    // };
    var formData = {
        requester_first_name: "",
        requester_last_name: "",
        requester_phone_number: "",
        requester_birth_date: Date.now(),
        diakonia: [
            {
                diakonia_type: "",
                diakonia_amount: 0,
                notes: "",
            },
        ],
        FA: "",
    };
    console.log(db_data);
    if (mode === "edit") {
        formData = db_data;
    }
    const { data, setData, post, put, processing, errors, reset, progress } =
        useForm(formData);
    console.log(data);
    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setData((data) => ({
            ...data,
            [key]: value,
        }));
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        if (mode === "edit") {
            console.log("edit");
            put(route("diakonia.update", db_data.id));
            return;
        }
        post(route("diakonia.store"));
    }

    function getNumberFromFormattedString(str: string) {
        // Remove all non-digit characters
        const cleaned = str.replace(/\D/g, "");

        // Convert the cleaned string to a number
        const number = parseInt(cleaned, 10);

        return number;
    }
    function addBantuan() {
        setData((data) => ({
            ...data,
            diakonia: [
                ...data.diakonia,
                {
                    diakonia_type: "",
                    diakonia_amount: 0,
                    notes: "",
                },
            ],
        }));
    }
    function removeBantuan(index: number) {
        setData((data) => ({
            ...data,
            diakonia: data.diakonia.filter((_, i) => i !== index),
        }));
    }
    console.log(errors);
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
                        <CardTitle>Informasi Penerima Diakonia {}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="requester_first_name">
                                    Nama Depan
                                </Label>
                                <Input
                                    id="requester_first_name"
                                    value={data.requester_first_name}
                                    onChange={handleChange}
                                />
                                {errors.requester_first_name && (
                                    <div>{errors.requester_first_name}</div>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="requester_last_name">
                                    Nama Belakang
                                </Label>
                                <Input
                                    id="requester_last_name"
                                    value={data.requester_last_name}
                                    onChange={handleChange}
                                />
                                {errors.requester_last_name && (
                                    <div>{errors.requester_last_name}</div>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="requester_phone_number">
                                    Nomor Telpon
                                </Label>
                                <Input
                                    id="requester_phone_number"
                                    value={data.requester_phone_number}
                                    onChange={handleChange}
                                />
                                {errors.requester_phone_number && (
                                    <div>{errors.requester_phone_number}</div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Tanggal Lahir</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "justify-start text-left font-normal",
                                                !data.requester_birth_date &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {data.requester_birth_date ? (
                                                format(
                                                    data.requester_birth_date,
                                                    "PPP"
                                                )
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            selected={
                                                data.requester_birth_date as any
                                            }
                                            mode="single"
                                            onSelect={(e) => {
                                                setData((data) => ({
                                                    ...data,
                                                    requester_birth_date:
                                                        e as any,
                                                }));
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                {errors.requester_birth_date && (
                                    <div>{errors.requester_birth_date}</div>
                                )}
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
                                {data.diakonia.map((diakonia, index) => (
                                    <TableRow>
                                        <TableCell className="font-medium">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                onValueChange={(value) => {
                                                    setData((data) => ({
                                                        ...data,
                                                        diakonia:
                                                            data.diakonia.map(
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
                                                    setData((data) => ({
                                                        ...data,
                                                        diakonia:
                                                            data.diakonia.map(
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
                                                    setData((data) => ({
                                                        ...data,
                                                        diakonia:
                                                            data.diakonia.map(
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
