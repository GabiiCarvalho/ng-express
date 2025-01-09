import React, { PropsWithChildren } from 'react';

type MyComponentProps ={
    children?: React.ReactNode;
}

const MyComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <div>{children}</div>;
};

export default MyComponent;
