import { IShoppingCart } from "../interfaces/IShoppingCart";

export const AddShoppingCartItem = (shoppingCart: IShoppingCart[], newItem: IShoppingCart) => {
    shoppingCart.push(newItem);
    return shoppingCart;
};

export const UpdateShoppingCartItem = (
    shoppingCart: IShoppingCart[],
    updatedItem: IShoppingCart
) => {
    if (updatedItem.amount <= 0) DeleteShoppingCartItem(shoppingCart, updatedItem.product.id);
    else {
        let index = shoppingCart.findIndex((i) => i.product.id === updatedItem.product.id);
        shoppingCart[index].amount = updatedItem.amount;
    }
    return shoppingCart;
};

export const DeleteShoppingCartItem = (shoppingCart: IShoppingCart[], deletedItemId: string) => {
    let index = shoppingCart.findIndex((i) => i.product.id === deletedItemId);
    shoppingCart.splice(index);
    return shoppingCart;
};
