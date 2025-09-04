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

export const getTotalItems = (cart) =>
    cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalPrice = (cart) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
