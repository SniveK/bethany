import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { FamilyAltar, PageProps, Paginated } from "@/types";
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
export default function Index({ auth, familyAltars }: PageProps<{ familyAltars: Paginated<FamilyAltar> }>) {

    function destroy(id: number): void {
        if (confirm("Are you sure you want to delete this item?")) {
            router.delete(route("family-altar.destroy", id));
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Family Altar"}>
            <Head title="Family Altar" />
            <div className="flex items-center">
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
                            className="sm:whitespace-nowrap"
                            href="/family-altar/create"
                        >
                            Tambah Family Altar
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
                                <TableHead>Address</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Ketua
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Dibuat Tanggal
                                </TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {familyAltars.data?.map((familyAltar) => (
                                <TableRow key={familyAltar.id}>
                                    <TableCell className="font-medium">
                                        {familyAltar.name}
                                    </TableCell>
                                    <TableCell>
                                        {familyAltar.address}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {familyAltar.user.name}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {familyAltar.created_at}
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
                                                    <Link href={route("family-altar.edit", familyAltar.id)}>Edit</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Button
                                                        variant="outline"
                                                        color="red"
                                                        size="sm"
                                                        onClick={() => destroy(familyAltar.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {/* <TableRow>
                                <TableCell className="font-medium">
                                    Laser Lemonade Machine
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">Diserahkan</Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    RP. 100.000
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    2023-07-12 10:42 AM
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
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        forms
                    </div>
                    <div className="flex gap-2">
                        <Button>Previous</Button>
                        <Button>Next</Button>
                    </div>
                </CardFooter>
            </Card>
        </AuthenticatedLayout>
    );
}
