import React from "react";


interface Props {
    active: boolean;
    items: {};
}

const Orders: React.FC<Props> = ({active, items}) => {

    return (
        <div>
            {active}

        </div>
    )
}

export default Orders;