import { createContext, ReactNode, useContext } from "react";

// Types for all variables passed into localstateprovider should be written below
type LayoutContext = {};

const LocalStateContext = createContext<LayoutContext>(null);
const LocalStateProvider = LocalStateContext.Provider;

const LayoutStateProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // Logic for some components needing global state written below

    return (
        <LocalStateProvider
            value={
                {
                    // Variables from above written logic passed in below
                }
            }
        >
            {children}
        </LocalStateProvider>
    );
};

function useLayout(): LayoutContext | null {
    // We use a consumer here to access the local state
    const all = useContext(LocalStateContext);
    return all;
}
export { LayoutStateProvider, useLayout };
