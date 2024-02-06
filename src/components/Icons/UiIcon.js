import * as React from "react";
const UiIcon = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={32} height={32} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_405_11298" transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0_405_11298"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default UiIcon;
