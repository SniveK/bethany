import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FormEventHandler } from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover';
import { Button } from '@/Components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { Calendar } from '@/Components/ui/calendar';

export default function Create({ auth }: PageProps) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        identification_number: '',
        address: '',
        birth: '',
        phone: '',
        fa_member: '',
    });

    console.log(data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('family-altar.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Family Altar Create</h2>}
        >
            <Head title="Family Altar Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div className='flex flex-row gap-8'>
                                <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="name">Nama</Label>
                                    <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} id="name" placeholder="Nama" />
                                    <p className="text-red-600">{errors.name}</p>
                                </div>

                                <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="identification_number">Nomor Identifikasi</Label>
                                    <Input
                                        type="text"
                                        value={data.identification_number}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d*$/.test(value)) {
                                                setData('identification_number', value);
                                            }
                                        }}
                                        id="identification_number"
                                        placeholder="Nomor Identifikasi"
                                    />
                                    <p className="text-red-600">{errors.identification_number}</p>
                                </div>
                            </div>

                            <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="address">Alamat</Label>
                                <Input type="text" value={data.address} onChange={(e) => setData('address', e.target.value)} id="address" placeholder="Alamat" />
                                <p className="text-red-600">{errors.address}</p>
                            </div>

                            <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="birth">Tanggal Lahir</Label>
                                <Input type="date" value={data.birth} onChange={(e) => setData('birth', e.target.value)} id="birth" placeholder="Tanggal Lahir" />
                                <p className="text-red-600">{errors.birth}</p>
                            </div>

                            <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="phone">Nomor Telepon</Label>
                                <Input
                                    type="text"
                                    value={data.phone}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) {
                                            setData('phone', value);
                                        }
                                    }}
                                    id="phone"
                                    placeholder="Nomor Telepon"
                                />
                                <p className="text-red-600">{errors.phone}</p>
                            </div>

                            <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="fa_member">Member FA</Label>
                                <Input type="text" value={data.fa_member} onChange={(e) => setData('fa_member', e.target.value)} id="fa_member" placeholder="Member FA" />
                                <p className="text-red-600">{errors.fa_member}</p>
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Button type="submit" disabled={processing}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
