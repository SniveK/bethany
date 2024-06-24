import { useState } from "react";
import { Input } from "./ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { router } from "@inertiajs/react";

export default function TablePagination(data: any) {
    if (data == null || data.db_data == null) return null;
    const db_data = data.db_data;
    console.log(db_data.links);
    const [page, setPage] = useState(db_data.current_page);
    function changePage(page: string) {
        var pageNum = parseInt(page);
        console.log(pageNum);
        if (pageNum > db_data.last_page) {
            pageNum = db_data.last_page;
        }
        if (pageNum < 1 || isNaN(pageNum)) {
            pageNum = 1;
        }
        setPage(pageNum);
    }
    function changePageUrl() {
        router.visit(db_data.links[page].url);
    }
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={db_data.prev_page_url} />
                </PaginationItem>
                <PaginationItem>
                    <Input
                        className="w-[40px] me-2"
                        value={page}
                        onChange={(e) => changePage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                changePageUrl();
                            }
                        }}
                    ></Input>
                </PaginationItem>
                <PaginationItem>
                    <span className="me-2">of</span>
                    {db_data.last_page}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href={db_data.next_page_url} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
