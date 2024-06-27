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
import { PropsWithChildren, useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
import { User } from "@/types";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
export default function AuthenticatedLayout({
    user,
    title,
    children,
}: PropsWithChildren<{ user: User; title?: String }>) {
    const { url, component } = usePage();

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await axios.get(route('api.notifications'));
            setNotifications(response.data);
        };

        fetchNotifications();
    }, []);

    const readNotification = () => {
        axios.get(route('api.notification.read'));
        setNotifications([]);
    };

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
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="ml-auto h-8 w-8"
                                >
                                    <Bell className={"h-4 w-4 " + (notifications.length > 0 ? "stroke-yellow-600" : "")} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <div className="flex flex-row justify-between">
                                            <h4 className="font-bold">Notifikasi</h4>
                                            <p onClick={readNotification} className="underline text-blue-600 hover:cursor-pointer">tandai sudah dibaca</p>
                                        </div>
                                        <ul>
                                            {notifications.map((notification: any) => (
                                                <li key={notification.id}>
                                                    <p>Ada form baru (form id : {notification.data.form_id})</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>

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
                            {user.roles.some((role) => role.id === 3) && (
                                <>
                                    <Separator></Separator>
                                    <Link
                                        href=""
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                        }
                                    >
                                        Admin
                                    </Link>
                                    <Link
                                        href={route("admin.diakonia.form")}
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                            (url.startsWith("/admin/diakonia")
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
                                </>
                            )}
                            {user.roles.some((role) => role.id === 1) && (
                                <>
                                    <Separator></Separator>
                                    <Link
                                        href=""
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                        }
                                    >
                                        Ketua Departemen
                                    </Link>
                                    <Link
                                        href={route("ketua-departemen.diakonia.form")}
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                            (url.startsWith("/ketua-departemen/diakonia")
                                                ? "bg-muted"
                                                : "text-muted-foreground")
                                        }
                                    >
                                        <FormInput className="h-4 w-4" />
                                        Form Diakonia
                                    </Link>
                                </>
                            )}

                            {user.roles.some((role) => role.id === 2) && (
                                <>
                                    <Separator></Separator>
                                    <Link
                                        href=""
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                        }
                                    >
                                        Ketua Divisi
                                    </Link>
                                    <Link
                                        href={route("ketua-divisi.diakonia.form")}
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                            (url.startsWith("/ketua-divisi/diakonia")
                                                ? "bg-muted"
                                                : "text-muted-foreground")
                                        }
                                    >
                                        <FormInput className="h-4 w-4" />
                                        Form Diakonia
                                    </Link>
                                </>
                            )}

                            {user.roles.some((role) => role.id === 4) && (
                                <>
                                    <Separator></Separator>
                                    <Link
                                        href=""
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                        }
                                    >
                                        Anggota
                                    </Link>
                                    <Link
                                        href={route("diakonia.index")}
                                        className={
                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                            (url.startsWith("/diakonia")
                                                ? "bg-muted"
                                                : "text-muted-foreground")
                                        }
                                    >
                                        <FormInput className="h-4 w-4" />
                                        Form Diakonia
                                    </Link>
                                </>
                            )}

                        </nav>
                    </div>
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
                                {user.roles.some((role) => role.id === 3) && (
                                    <>
                                        <Separator></Separator>
                                        <Link
                                            href=""
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                            }
                                        >
                                            Admin
                                        </Link>
                                        <Link
                                            href={route("admin.diakonia.form")}
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                                (url.startsWith("/admin/diakonia")
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
                                    </>
                                )}
                                {user.roles.some((role) => role.id === 1) && (
                                    <>
                                        <Separator></Separator>
                                        <Link
                                            href=""
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                            }
                                        >
                                            Ketua Departemen
                                        </Link>
                                        <Link
                                            href={route("ketua-departemen.diakonia.form")}
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                                (url.startsWith("/ketua-departemen/diakonia")
                                                    ? "bg-muted"
                                                    : "text-muted-foreground")
                                            }
                                        >
                                            <FormInput className="h-4 w-4" />
                                            Form Diakonia
                                        </Link>
                                    </>
                                )}

                                {user.roles.some((role) => role.id === 2) && (
                                    <>
                                        <Separator></Separator>
                                        <Link
                                            href=""
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                            }
                                        >
                                            Ketua Divisi
                                        </Link>
                                        <Link
                                            href={route("ketua-divisi.diakonia.form")}
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                                (url.startsWith("/ketua-divisi/diakonia")
                                                    ? "bg-muted"
                                                    : "text-muted-foreground")
                                            }
                                        >
                                            <FormInput className="h-4 w-4" />
                                            Form Diakonia
                                        </Link>
                                    </>
                                )}

                                {user.roles.some((role) => role.id === 4) && (
                                    <>
                                        <Separator></Separator>
                                        <Link
                                            href=""
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primarybg-muted"
                                            }
                                        >
                                            Anggota
                                        </Link>
                                        <Link
                                            href={route("diakonia.index")}
                                            className={
                                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary " +
                                                (url.startsWith("/diakonia")
                                                    ? "bg-muted"
                                                    : "text-muted-foreground")
                                            }
                                        >
                                            <FormInput className="h-4 w-4" />
                                            Form Diakonia
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
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
                            {/* <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem> */}
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
                    {children}
                </main>
            </div>
        </div>
    );
}
