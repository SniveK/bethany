// import { useState, PropsWithChildren, ReactNode } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import { Link } from '@inertiajs/react';
// import { User } from '@/types';

// export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
//     const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <nav className="bg-white border-b border-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="shrink-0 flex items-center">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
//                                 </Link>
//                             </div>

//                             <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     Dashboard
//                                 </NavLink>
//                             </div>
//                         </div>

//                         <div className="hidden sm:flex sm:items-center sm:ms-6">
//                             <div className="ms-3 relative">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
//                                             >
//                                                 {user.name}

//                                                 <svg
//                                                     className="ms-2 -me-0.5 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
//                                         <Dropdown.Link href={route('logout')} method="post" as="button">
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="-me-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//                             >
//                                 <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path
//                                         className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
//                     <div className="pt-2 pb-3 space-y-1">
//                         <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>

//                     <div className="pt-4 pb-1 border-t border-gray-200">
//                         <div className="px-4">
//                             <div className="font-medium text-base text-gray-800">
//                                 {user.name}
//                             </div>
//                             <div className="font-medium text-sm text-gray-500">{user.email}</div>
//                         </div>

//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
//                             <ResponsiveNavLink method="post" href={route('logout')} as="button">
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {header && (
//                 <header className="bg-white shadow">
//                     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }
import {
    Bell,
    CircleUser,
    Home,
    Menu,
    Package2,
    FormInput,
    CircleUserRound,
    UsersRound,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { PropsWithChildren } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
export default function AuthenticatedLayout({
    user,
    title,
    children,
}: PropsWithChildren<{ user: any; title?: String }>) {
    const { url, component } = usePage();
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <span className="">Bethany Yestoya Malang</span>
                        </Link>
                        <Button
                            variant="outline"
                            size="icon"
                            className="ml-auto h-8 w-8"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">
                                Toggle notifications
                            </span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="/dashboard"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/dashboard")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                href="/diakonia"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/diakonia")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <FormInput className="h-4 w-4" />
                                Diakonia
                            </Link>
                            <Link
                                href="/family-altar"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/family-altar")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <UsersRound className="h-4 w-4" />
                                Family Altar
                            </Link>
                            <Link
                                href="/family-altar"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/family-altar")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <UsersRound className="h-4 w-4" />
                                Survey
                            </Link>
                            <Link
                                href="/account"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/o")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <CircleUserRound className="h-4 w-4" />
                                Accounts
                            </Link>
                            {/* <Link
                                href="/family-altar"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/family-altar")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <UsersRound className="h-4 w-4" />
                                Family Altar
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge>
                            </Link> */}

                            {/* <Separator></Separator>
                            <Link
                                href=""
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                }
                            >
                                Admin
                            </Link>
                            <Link
                                href="/accounts"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/o")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <FormInput className="h-4 w-4" />
                                Form Diakonia
                            </Link>
                            <Link
                                href="/family-altar"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/family-altar")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <UsersRound className="h-4 w-4" />
                                Family Altar
                            </Link>
                            <Link
                                href="/accounts"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/o")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <CircleUserRound className="h-4 w-4" />
                                Accounts
                            </Link> */}
                            {/* <Link
                                href="#"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/o")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <Users className="h-4 w-4" />
                                Customers
                            </Link>
                            <Link
                                href="#"
                                className={
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                    (url.startsWith("/o")
                                        ? "bg-muted"
                                        : "text-muted-foreground")
                                }
                            >
                                <LineChart className="h-4 w-4" />
                                Analytics
                            </Link> */}
                        </nav>
                    </div>
                    {/* <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access
                                    to our support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className={
                                        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground " +
                                        (url.startsWith("/dashboard")
                                            ? "bg-muted"
                                            : "text-muted-foreground")
                                    }
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="/diakonia"
                                    className={
                                        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground " +
                                        (url.startsWith("/diakonia")
                                            ? "bg-muted"
                                            : "text-muted-foreground")
                                    }
                                >
                                    <FormInput className="h-5 w-5" />
                                    Diakonia
                                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge> */}
                                </Link>
                                <Link
                                    href="/family-altar"
                                    className={
                                        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground " +
                                        (url.startsWith("/family-altar")
                                            ? "bg-muted"
                                            : "text-muted-foreground")
                                    }
                                >
                                    <UsersRound className="h-5 w-5" />
                                    Family Altar
                                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge> */}
                                </Link>
                                <Link
                                    href="/accounts"
                                    className={
                                        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground " +
                                        (url.startsWith("/o")
                                            ? "bg-muted"
                                            : "text-muted-foreground")
                                    }
                                >
                                    <CircleUserRound className="h-5 w-5" />
                                    Accounts
                                </Link>
                            </nav>
                            {/* <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get
                                            unlimited access to our support
                                            team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div> */}
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        {/* <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form> */}
                        <h1 className="text-lg font-semibold md:text-2xl">
                            {title}
                        </h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full"
                            >
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {/* <div className="flex items-center">
                        <h1 className="text-lg font-semibold md:text-2xl">
                            {title}
                        </h1>
                    </div> */}
                    {children}
                    {/* <div
                        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                        x-chunk="dashboard-02-chunk-1"
                    >
                        <div className="flex flex-col items-center gap-1 text-center">
                            <h3 className="text-2xl font-bold tracking-tight">
                                You have no products
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                You can start selling as soon as you add a
                                product.
                            </p>
                            <Button className="mt-4">Add Product</Button>
                        </div>
                    </div> */}
                </main>
            </div>
        </div>
    );
}
