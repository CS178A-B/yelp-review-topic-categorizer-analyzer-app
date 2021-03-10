import React from "react";
import { EuiImage } from '@elastic/eui';

export function imageLink(value) {
    return(
        <EuiImage
            size={150}
            src={value}
            alt="image_alt"
        />
    )
}