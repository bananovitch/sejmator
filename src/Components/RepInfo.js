import React from 'react';
import { AppHeader } from './AppHeader'

export const RepInfo = ({ Rep }) => (
    <main>
        <AppHeader>{ Rep.data["ludzie.nazwa"] }</AppHeader>
        <div className="rep-info">

        </div>
    </main>
    
)