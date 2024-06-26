import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Diakonia, PageProps, User } from "@/types";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { formatDate, formatNumberToRupiah } from "@/lib/utilities";
import { Textarea } from "@/Components/ui/textarea";
import { useEffect, useState } from "react";
import { format, set } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
export default function Show({
    auth,
    diakonia,
    surveyors,
}: PageProps<{ diakonia: Diakonia, surveyors: User[] }>) {
    const [comment, setComment] = useState('');

    const submit = (status: string) => {
        router.post(route('admin.diakonia.approve', diakonia.id), {
            status: status,
            comment: comment,
        });
    };

    const [date, setDate] = useState<Date>()
    const [surveyorId, setSurveyorId] = useState<string>()

    const surveySubmit = () => {
        if (!surveyorId || !date) return
        router.post(route('admin.survey.store'), {
            surveyor_id: surveyorId,
            diakonia_id: diakonia.id,
            date: date && format(date, 'yyyy-MM-dd')
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
            <div className="flex flex-row justify-between">
                <Link href={route("admin.diakonia.form")}>
                    <Button>Back</Button>
                </Link>
                {diakonia.status === "Menunggu Survey" && (
                    diakonia.survey ? (
                        <p>Sudah di Jadwalkan survey</p>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">Jadwalkan Survey</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Jadwal Survey</h4>
                                        <p className="text-sm text-muted-foreground">
                                            pilih surveyor dan tanggal untuk survey
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="surveyor">Surveyor</Label>
                                            <Select onValueChange={setSurveyorId} value={surveyorId}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Pilih Surveyor" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {surveyors.map((surveyor) => (
                                                            <SelectItem
                                                                key={surveyor.id}
                                                                value={surveyor.id.toString()}
                                                            >
                                                                {surveyor.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="">Tanggal</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] justify-start text-left font-normal",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                        disabled={(date) => date < new Date()}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <Button onClick={surveySubmit}>Submit</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )

                )}
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Data Penerima Diakonia</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Depan
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.requester_first_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Belakang
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.requester_last_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nomor Telepon
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.requester_phone_number}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Lahir
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(diakonia.requester_birth_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Permintaan
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(diakonia.request_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.family_altar.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Alamat Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.family_altar.address}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Ketua Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.family_altar.address}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Status
                                </TableCell>
                                <TableCell className="font-medium">
                                    {diakonia.status}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Diakonia</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tipe Diakonia</TableHead>
                                <TableHead>Jumlah</TableHead>
                                <TableHead>Notes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {diakonia.requester_help.map(
                                (item: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium me-auto">
                                            {item.type}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {formatNumberToRupiah(item.amount)}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {item.notes}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Total
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatNumberToRupiah(
                                        diakonia.requester_help.reduce(
                                            (acc: any, item: any) =>
                                                acc + item.amount,
                                            0
                                        )
                                    )}
                                </TableCell>
                                <TableCell className="font-medium"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            {diakonia.diakonia_aprovals.some((aproval) => aproval.role_id === 3) ? (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">{diakonia.diakonia_aprovals.find((aproval) => aproval.role_id === 3)?.status}</CardTitle>
                    </CardHeader>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Evaluasi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea value={comment} onChange={(e) => setComment(e.target.value)}></Textarea>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => submit('Diterima')} disabled={comment === ''}>Terima</Button>
                        <Button onClick={() => submit('Ditolak')} disabled={comment === ''}>Tolak</Button>
                    </CardFooter>
                </Card>
            )}

        </AuthenticatedLayout>
    );
}
