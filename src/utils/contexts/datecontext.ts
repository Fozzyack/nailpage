import React from 'react';
import { DateContextValue } from '../types/types';

const DateContext = React.createContext<DateContextValue | undefined>(undefined);

function useDateContext() {
    const context = React.useContext(DateContext);
    if (!context) {
        throw new Error(
            'useDateContext must be used within a DateProvider'
        );
    }
    return context;
}

export { DateContext, useDateContext}