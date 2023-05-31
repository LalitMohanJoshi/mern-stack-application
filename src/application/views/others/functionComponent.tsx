import { memo } from "react";

const FunctionComponent = ((props: any) => {
    console.log("FunctionComponent props: ", props);

    const style: any = { 'color': 'darkorchid', 'fontSize': 'medium' };
    return (
        <div>
            <p style={style}>This is my function component</p>
        </div>
    );
});

export default memo(FunctionComponent);