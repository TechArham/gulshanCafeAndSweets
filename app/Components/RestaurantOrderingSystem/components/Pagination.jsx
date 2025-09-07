import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsPerPage
}) => {
    if (totalPages <= 1) return null;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 px-4">
            {/* Items info */}
            <div className="text-sm text-gray-700 mb-4 sm:mb-0">
                Showing {startItem} to {endItem} of {totalItems} items
            </div>

            {/* Pagination controls */}
            <div className="flex items-center space-x-2">
                {/* Previous button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex  cursor-pointer items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-orange-500'
                        }`}
                >
                    <ChevronLeft size={16} className="mr-1" />
                    Previous
                </button>

                {/* Page numbers */}
                <div className="flex items-center space-x-1">
                    {getPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            disabled={page === '...'}
                            className={`px-3  cursor-pointer py-2 text-sm font-medium rounded-lg transition-colors ${page === currentPage
                                    ? 'bg-orange-500 text-white'
                                    : page === '...'
                                        ? 'text-gray-400 cursor-default'
                                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-orange-500'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex cursor-pointer items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-orange-500'
                        }`}
                >
                    Next
                    <ChevronRight size={16} className="ml-1" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
