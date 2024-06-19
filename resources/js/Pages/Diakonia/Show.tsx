import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { reducer } from "../../Components/ui/use-toast";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import {
    formatDate,
    formatNumberToRupiah,
    formatStringToRupiah,
} from "@/lib/utilities";
export default function Show({
    auth,
    data,
}: PageProps<{ data: any; links: any }>) {
    console.log(data);
    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
            <div className="flex ">
                <Button>
                    <Link href="/diakonia">Back</Link>
                </Button>
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
                                    {data.requester_first_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nama Belakang
                                </TableCell>
                                <TableCell className="font-medium">
                                    {data.requester_last_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Nomor Telepon
                                </TableCell>
                                <TableCell className="font-medium">
                                    {data.requester_phone_number}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Lahir
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(data.requester_birth_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Tanggal Permintaan
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatDate(data.request_date)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Status
                                </TableCell>
                                <TableCell className="font-medium">
                                    {data.status}
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
                            {data.diakonia.map((item: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium me-auto">
                                        {item.diakonia_type}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {formatNumberToRupiah(
                                            item.diakonia_amount
                                        )}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {item.notes}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell className="font-medium me-auto">
                                    Total
                                </TableCell>
                                <TableCell className="font-medium">
                                    {formatNumberToRupiah(
                                        data.diakonia.reduce(
                                            (acc: any, item: any) =>
                                                acc + item.diakonia_amount,
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
        </AuthenticatedLayout>
    );
}
