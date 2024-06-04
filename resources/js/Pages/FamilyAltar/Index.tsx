import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { FamilyAltar, PageProps, Paginated } from '@/types';
import { Button, buttonVariants } from '@/Components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

export default function Index({ auth, familyAltars }: PageProps<{ familyAltars: Paginated<FamilyAltar> }>) {
    console.log(familyAltars);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Family Altar</h2>}
        >
            <Head title="Family Altar" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link href={route('family-altar.create')} className={buttonVariants({ variant: "default" })}>Create</Link>
                        <Table>
                            <TableCaption>
                                {familyAltars.prev_page_url &&
                                    <Link href={familyAltars.prev_page_url} className={buttonVariants({ variant: "default" })}>Prev</Link>
                                }
                                {familyAltars.next_page_url &&
                                    <Link href={familyAltars.next_page_url} className={buttonVariants({ variant: "default" })}>Next</Link>
                                }
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nama</TableHead>
                                    <TableHead>Alamat</TableHead>
                                    <TableHead className='w-40'>Tanggal Lahir</TableHead>
                                    <TableHead>Member FA</TableHead>
                                    <TableHead>Nomor Identifikasi</TableHead>
                                    <TableHead className='w-40'>Nomor Telepon</TableHead>
                                    <TableHead className='text-center'>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {familyAltars.data.map((familyAltar) => (
                                    <TableRow key={familyAltar.id}>
                                        <TableCell>{familyAltar.name}</TableCell>
                                        <TableCell>{familyAltar.address}</TableCell>
                                        <TableCell>{format(new Date(familyAltar.birth), 'dd MMMM yyyy')}</TableCell>
                                        <TableCell>{familyAltar.fa_member}</TableCell>
                                        <TableCell>{familyAltar.identification_number}</TableCell>
                                        <TableCell>{familyAltar.phone}</TableCell>
                                        <TableCell className="flex flex-row">
                                            <Link href={route('family-altar.edit', familyAltar.id)} className={buttonVariants({ variant: "default" })}><Pencil1Icon /></Link>
                                            <Button
                                                variant="destructive"
                                                onClick={() => router.delete(route('family-altar.destroy', familyAltar.id))}
                                                className={buttonVariants({ variant: "destructive" })}
                                            >
                                                <TrashIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
