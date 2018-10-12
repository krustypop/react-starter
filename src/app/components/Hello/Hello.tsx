import * as React from 'react';
import './Hello.scss';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export const Hello: React.SFC<IHelloProps> = (props) => {
    const { compiler, framework } = props;

    return (
        <div className="hello">
            <h1>Hello from {compiler} and {framework}!</h1>
        </div>
    );
};
