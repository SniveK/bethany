import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { Diakonia, PageProps, Survey } from "@/types";
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
import { set } from "date-fns";
export default function Show({
    auth,
    survey,
}: PageProps<{ survey: Survey }>) {
    const [comment, setComment] = useState('');

    const submit = (status: string) => {
        router.post(route('ketua-divisi.survey.hasil', survey.id), {
            status: status,
            comment: comment,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} title={"Survey"}>
            <Head title="Survey" />
            <div className="flex ">
                <Link href={route("ketua-divisi.survey.index")}>
                    <Button>Back</Button>
                </Link>
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
                                    {survey.diakonia.requester_first_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Belakang
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.diakonia.requester_last_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nomor Telepon
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.diakonia.requester_phone_number}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Lahir
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(survey.diakonia.requester_birth_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Permintaan
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(survey.diakonia.request_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.diakonia.family_altar.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Alamat Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.diakonia.family_altar.address}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Ketua Family Altar
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.diakonia.family_altar.address}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Status
                                </TableCell>
                                <TableCell className="font-medium">
                                    {survey.status}
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
                            {survey.diakonia.requester_help.map(
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
                                        survey.diakonia.requester_help.reduce(
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
            <Card>
                <CardHeader>
                    <CardTitle>Hasil Survey</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{survey.survey}</p>
                </CardContent>
            </Card>
            {survey.survey_aprovals.some((aproval) => aproval.role_id === 2) ? (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">{survey.survey_aprovals.find((aproval) => aproval.role_id === 2)?.status}</CardTitle>
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
