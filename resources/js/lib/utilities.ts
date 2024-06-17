// Format a String into Rupiah format
export function formatStringToRupiah(str: string) {
    // Remove all non-digit characters
    const cleaned = str.replace(/\D/g, "");

    // Convert to number and format to Rupiah
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
    return formatter.format(cleaned as any);
}
// Format a number into Rupiah format
export function formatNumberToRupiah(num: number) {
    // Format to Rupiah
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
    return formatter.format(num);
}
// Format a date string into a readable format
export function formatDate(date: string) {
    // Format to date
    return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}