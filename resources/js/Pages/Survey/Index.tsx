import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps, Paginated } from "@/types";
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
import { formatDate } from "@/lib/utilities";
import TablePagination from "@/Components/TablePagination";
const SLUG = "cccount";
const PAGETITLE = "Accounts";
export default function Index({
    auth,
    accounts,
}: PageProps<{ accounts: Paginated<any> }>) {
    function destroy(id: number): void {
        if (confirm("Are you sure you want to delete this item?")) {
            router.delete(route("family-altar.destroy", id));
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={PAGETITLE}>
            <Head title={PAGETITLE} />
            <div className="flex items-center">
                <div className="ml-auto flex items-center gap-2">
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
                            className="sm:whitespace-nowrap"
                            href="/account/create"
                        >
                            Tambah {PAGETITLE}
                        </Link>
                    </Button>
                </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Alamat</TableHead>
                                <TableHead>Nomor Telpon</TableHead>
                                <TableHead className="hidden md:table-cell">

                                </TableHead>
                                {/* <TableHead className="hidden md:table-cell">
                                    Dibuat Tanggal
                                </TableHead> */}
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    John Smith
                                </TableCell>
                                <TableCell>
                                    <Badge variant="default">Admin</Badge>
                                </TableCell>
                                <TableCell>08121313</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    Email@email.com
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    Jl sdfljasdfj
                                </TableCell>
                                {/* <TableCell className="hidden md:table-cell">
                                    {Date.now().toLocaleString()}
                                </TableCell> */}
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
                                            {/* <DropdownMenuItem>
                                                <Link
                                                    // href={route(
                                                    //     "account.edit"
                                                    //     // account.id
                                                    // )}
                                                >
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem> */}
                                            <DropdownMenuItem
                                            // onClick={() => destroy(1)}
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        {/* <TableBody>
                            {accounts.data?.map((account) => (
                                <TableRow key={account.id}>
                                    <TableCell className="font-medium">
                                        {account.name}
                                    </TableCell>
                                    <TableCell>{account.address}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {account.user.name}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {formatDate(account.created_at)}
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
                                                <DropdownMenuItem>
                                                    <Link
                                                        href={route(
                                                            "family-altar.edit",
                                                            account.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        destroy(account.id)
                                                    }
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody> */}
                    </Table>
                </CardContent>
                <CardFooter className="justify-between">
                    {/* <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        forms
                    </div> */}
                    <div className="flex gap-2">
                        <TablePagination data={accounts} />
                    </div>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
