import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello: React.SFC<HelloProps> = (props) => {
    const { compiler, framework } = props;

    return (
        <div className="hello">
            <h1>Hello from {compiler} and {framework}!</h1>
        </div>
    );
}
