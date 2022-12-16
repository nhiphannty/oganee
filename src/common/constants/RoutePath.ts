interface IPath {
    name: string;
    path: string;
}

export const HomePath: IPath = {
    name: "Home",
    path: "/",
};

export const ShopPath: IPath = {
    name: "Shop",
    path: "/shop",
};

export const BlogPath: IPath = {
    name: "Blog",
    path: "/blog",
};

export const ContactPath: IPath = {
    name: "Contact",
    path: "/contact",
};

export const AllPaths: IPath[] = [HomePath, ShopPath, BlogPath, ContactPath];
