import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Diakonia, PageProps, Paginated, Survey } from "@/types";
import {
    ListFilter,
    PlusCircle,
    Search,
} from "lucide-react";
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
import TablePagination from "../../../Components/TablePagination";
import {
    formatDate,
    formatNumberToRupiah,
} from "@/lib/utilities";
import { useState } from "react";
export default function Index({
    auth,
    surveys,
}: PageProps<{ surveys: Paginated<Survey> }>) {
    const [filter, setFilter] = useState("semua");
    function changeFilter(arg: string) {
        setFilter(arg);
        router.get(
            route("ketua-divisi.survey.index"),
            { filter: arg },
            { preserveState: true }
        );
    }
    return (
        <AuthenticatedLayout user={auth.user} title={"Survey"}>
            <Head title="Survey" />
            <div className="flex items-center">
                <div className="relative flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Cari Nama"
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1"
                            >
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Filter: {filter}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem
                                checked={filter === "semua"}
                                onCheckedChange={() => changeFilter("semua")}
                            >
                                Semua
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={filter === "Pending"}
                                onCheckedChange={() =>
                                    changeFilter("Pending")
                                }
                            >
                                Pending
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={filter === "Diterima"}
                                onCheckedChange={() => changeFilter("Diterima")}
                            >
                                Diterima
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={filter === "Ditolak"}
                                onCheckedChange={() => changeFilter("Ditolak")}
                            >
                                Ditolak
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <Button
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button> */}
                </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Survey Diakonia</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Surveyor</TableHead>
                                <TableHead>Form Diakonia ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tanggal Survey</TableHead>
                                {/* <TableHead>Actions</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {surveys.data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">
                                        {item.id}
                                    </TableCell>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-divisi.survey.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.user.name}
                                    </TableCell>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-divisi.survey.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.diakonia.id}
                                    </TableCell>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-divisi.survey.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.survey_aprovals.find((item) => item.role_id == 2)?.status || "Pending"}
                                    </TableCell>
                                    <TableCell
                                        onClick={() => {
                                            router.get(
                                                route("ketua-divisi.survey.show", item.id)
                                            );
                                        }}
                                    >
                                        <Badge variant="outline">
                                            {item.date}
                                        </Badge>
                                    </TableCell>

                                    {/* <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    aria-haspopup="true"
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Toggle menu
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        router.visit(
                                                            route(
                                                                "diakonia.edit",
                                                                item.id
                                                            )
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-between">
                    <div className="text-xs text-muted-foreground">
                        {/* Showing <strong>1-10</strong> of{" "}
                                <strong>32</strong> products */}
                    </div>
                    <div className="flex gap-2">
                        <TablePagination db_data={surveys} />
                    </div>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
