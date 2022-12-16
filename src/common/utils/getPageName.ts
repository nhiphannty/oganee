import { AllPaths } from "../constants/routePath";

export const getPageName = (path: string): string | undefined => {
    return AllPaths.find((p) => p.path === path.toLowerCase())?.name;
};
