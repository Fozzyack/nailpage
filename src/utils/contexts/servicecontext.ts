import React from 'react';
import { ServiceContextValue } from '../types/types';


const ServiceContext = React.createContext<ServiceContextValue | undefined>(undefined);

function useServiceContext() {
    const context = React.useContext(ServiceContext);
    if (!context) {
        throw new Error(
            'useServiceContext must be used within a ServiceProvider'
        );
    }
    return context;
}

export { ServiceContext, useServiceContext };
