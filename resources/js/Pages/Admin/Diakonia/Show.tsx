import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Diakonia, PageProps } from "@/types";
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
export default function Show({
    auth,
    diakonia,
}: PageProps<{ diakonia: Diakonia; links: any }>) {
    console.log(diakonia);
    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
            <div className="flex ">
                <Link href="/diakonia">
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
            <Card>
                <CardHeader>
                    <CardTitle>Evaluasi</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea></Textarea>
                </CardContent>
                <CardFooter>
                    <Button>Terima</Button>
                    <Button>Tolak</Button>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
