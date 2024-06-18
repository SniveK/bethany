import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Diakonia, PageProps, Paginated } from "@/types";
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
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
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
export default function Index({
    auth,
    diakonias,
    links,
}: PageProps<{ diakonias: Paginated<Diakonia>; links: any }>) {

    function destroy(id: number): void {
        if (confirm("Are you sure you want to delete this item?")) {
            router.delete(route("diakonia.destroy", id));
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Diakonia"}>
            <Head title="Dashboard" />
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">Semua</TabsTrigger>
                        <TabsTrigger value="active">Diserahkan</TabsTrigger>
                        <TabsTrigger value="draft">Diterima</TabsTrigger>
                        <TabsTrigger value="draft">Ditolak</TabsTrigger>
                        {/* <TabsTrigger
                            value="archived"
                            className="hidden sm:flex"
                        >
                            Archived
                        </TabsTrigger> */}
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Active
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Draft
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
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
                <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                            <CardTitle>Form Diakonia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Jumlah
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Created at
                                        </TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {diakonias.data.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">
                                                {item.requester_first_name +
                                                    " " +
                                                    item.requester_last_name}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {formatNumberToRupiah(
                                                    item.requester_help.reduce(
                                                        (
                                                            total: any,
                                                            helpItem: any
                                                        ) =>
                                                            total +
                                                            helpItem.amount,
                                                        0
                                                    )
                                                )}
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {formatDate(item.created_at)}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
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
                                                        <DropdownMenuItem>
                                                            <Link href={route('diakonia.edit', item.id)}>Edit</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Button
                                                                variant="outline"
                                                                color="red"
                                                                size="sm"
                                                                onClick={() => destroy(item.id)}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
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
                                {/* <Button>Previous</Button>
                                <Button>Next</Button> */}
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious
                                                href={diakonias.prev_page_url}
                                            />
                                        </PaginationItem>
                                        <PaginationItem>
                                            {/* <PaginationLink href="#">
                                                1
                                            </PaginationLink> */}
                                            <Input
                                                type="number"
                                                className="w-[40px] me-2"
                                                defaultValue={diakonias.current_page}
                                            // value={data.current_page}
                                            ></Input>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <span className="me-2">of</span>
                                            {diakonias.last_page}
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href={diakonias.next_page_url} />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </AuthenticatedLayout>
    );
}
