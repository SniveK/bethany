import { Input } from "./ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";

export default function TablePagination(db_data: any) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={db_data.links[0].url} />
                </PaginationItem>
                <PaginationItem>
                    {/* <PaginationLink href="#">
                                                1
                                            </PaginationLink> */}
                    <Input
                        className="w-[40px] me-2"
                        defaultValue={db_data.current_page}
                        // value={data.current_page}
                    ></Input>
                </PaginationItem>
                <PaginationItem>
                    <span className="me-2">of</span>
                    {db_data.last_page}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href={db_data.links[db_data.last_page + 1].url}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
