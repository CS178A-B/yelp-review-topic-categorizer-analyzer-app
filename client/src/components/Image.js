import React from "react";
import { EuiImage } from '@elastic/eui';

export function imageLink(value) {
    return(
        <EuiImage
            size={"s"}
            src={value}
            alt="image_alt"
            hasShadow={true}
        />
    )
}