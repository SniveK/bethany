import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Diakonia, PageProps, Paginated } from "@/types";
import {
    Calendar,
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
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import TablePagination from "../../../Components/TablePagination";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
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
import { useEffect, useState } from "react";
export default function Index({
    auth,
    diakonias,
}: PageProps<{ diakonias: Paginated<Diakonia> }>) {
    const [filter, setFilter] = useState("semua");
    function changeFilter(arg: string) {
        setFilter(arg);
        router.get(
            route("ketua-departemen.diakonia.form"),
            { filter: arg },
            { preserveState: true }
        );
    }
    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
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
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <Link
                            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                            href="/diakonia/create"
                        >
                            Buat Form Diakonia
                        </Link>
                    </Button>
                </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Form Diakonia</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>FA</TableHead>
                                <TableHead>Ketua FA</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Jumlah
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Created at
                                </TableHead>
                                {/* <TableHead>Actions</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {diakonias.data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.requester_first_name +
                                            " " +
                                            item.requester_last_name}
                                    </TableCell>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.requester_first_name +
                                            " " +
                                            item.requester_last_name}
                                    </TableCell>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        {item.requester_first_name +
                                            " " +
                                            item.requester_last_name}
                                    </TableCell>
                                    <TableCell
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        <Badge variant="outline">
                                            {item.diakonia_aprovals.find((approval) => approval.role_id === 1)?.status || "Pending"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell
                                        className="hidden md:table-cell"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        {formatNumberToRupiah(
                                            item.requester_help.reduce(
                                                (total: any, helpItem: any) =>
                                                    total + helpItem.amount,
                                                0
                                            )
                                        )}
                                    </TableCell>
                                    <TableCell
                                        className="hidden md:table-cell"
                                        onClick={() => {
                                            router.get(
                                                route("ketua-departemen.diakonia.show", item.id)
                                            );
                                        }}
                                    >
                                        {formatDate(item.created_at)}
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
                        <TablePagination db_data={diakonias} />
                    </div>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
