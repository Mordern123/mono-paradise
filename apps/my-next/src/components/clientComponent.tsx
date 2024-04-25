'use client';

import { ReactNode } from "react";
import ServerComponent from "./serverComponent";

export default function ClientComponent() {
    return (
        <div>
            <h1>This block is Client Component!!!</h1>
            <h1>{<ServerComponent/>}</h1>
        </div>
    );
}

// export default function ClientComponent({ children }: { children: ReactNode }) {
//     return (
//         <div>
//             <h1>Client Component</h1>
//             <h1>Server Component: {children}</h1>
//         </div>
//     );
// }