'use client';

import {Toaster} from 'react-hot-toast';
import React from 'react';

type Props = {
    children: React.ReactNode,
}

export default function ToasterProvider({
    children
}:Props){


    return (<>

    <>
    <Toaster />
        {children}
    </>
       
    
    </>)
}