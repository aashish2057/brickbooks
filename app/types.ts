import React from "react";

export interface Sets {
    id: string;
    setName: string;
}[]

export interface Results<Sets> {
    results?: Sets[];
    renderItem(item: Sets): JSX.Element;
    onChange?: React.ChangeEventHandler
}