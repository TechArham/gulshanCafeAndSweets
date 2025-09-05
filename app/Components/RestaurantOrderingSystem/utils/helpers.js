export const getFilteredItems = (category, menuData, searchTerm, visibleItems) => {
    if (!menuData || !category) return [];
    const categoryItems = menuData[category] || [];
    if (!searchTerm) return categoryItems.slice(0, visibleItems);
    return categoryItems
        .filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, visibleItems);
};

export const getPaginatedItems = (category, menuData, searchTerm, currentPage, itemsPerPage) => {
    if (!menuData || !category) return { items: [], totalPages: 0, totalItems: 0 };

    let categoryItems = menuData[category] || [];

    // Apply search filter if searchTerm exists
    if (searchTerm) {
        categoryItems = categoryItems.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }

    const totalItems = categoryItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = categoryItems.slice(startIndex, endIndex);

    return { items, totalPages, totalItems };
};

export const getTotalItems = (cart) =>
    cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalPrice = (cart) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
