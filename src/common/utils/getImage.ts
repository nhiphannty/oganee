const categoryImages = require.context("../../assets/img/categories");
const productImages = require.context("../../assets/img/products");

export const getCategoryImage = async (imageName: string) => {
    let temp = categoryImages(`./${imageName}`);
    return temp;
};

export const getProductImage = (imageName: string) => {
    let temp = productImages(`./${imageName}`);
    return temp;
};
