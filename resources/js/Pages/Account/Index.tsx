import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
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
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/Components/ui/menubar";
const slug = "account";
const title = "Account";
export default function Index({
    auth,
    data,
}: PageProps<{
    data: any;
    links: any;
}>) {
    console.log(data);
    return (
        <AuthenticatedLayout user={auth.user} title={title}>
            <Head title={title} />
            <div className="flex items-center">
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
                    {/* <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <Link
                            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                            href={slug + "/create"}
                        >
                            Buat Form Diakonia
                        </Link>
                    </Button> */}
                </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Created at
                                </TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.data.map((item: any) => (
                                <TableRow>
                                    <TableCell
                                        className="font-medium"
                                        onClick={() => {
                                            router.visit(slug + "/" + item.id);
                                        }}
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell
                                        onClick={() => {
                                            router.visit(slug + "/" + item.id);
                                        }}
                                    >
                                        {item.email}
                                    </TableCell>
                                    <TableCell
                                        className="hidden md:table-cell"
                                        onClick={() => {
                                            router.visit(slug + "/" + item.id);
                                        }}
                                    >
                                        {formatDate(item.created_at)}
                                    </TableCell>
                                    <TableCell>
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
                                                            slug +
                                                                "/" +
                                                                item.id +
                                                                "/edit"
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Delete
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
                                        href={data.links[0].url}
                                    />
                                </PaginationItem>
                                <PaginationItem>
                                    {/* <PaginationLink href="#">
                                                1
                                            </PaginationLink> */}
                                    <Input
                                        className="w-[40px] me-2"
                                        defaultValue={data.current_page}
                                        // value={data.current_page}
                                    ></Input>
                                </PaginationItem>
                                <PaginationItem>
                                    <span className="me-2">of</span>
                                    {data.last_page}
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext
                                        href={
                                            data.links[data.last_page + 1].url
                                        }
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
