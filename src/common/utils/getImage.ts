export const getCategoryImage = async (imageName: string) => {
    return `/img/categories/${imageName}`;
};

export const getProductImage = (image: string) => {
    return `../../assets/img/products/${image}`;
};
