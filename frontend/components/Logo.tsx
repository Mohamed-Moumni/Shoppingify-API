import React from "react";

type LogoAttributes = React.SVGProps<HTMLDivElement>;

function Logo(props: LogoAttributes) {
	return <div {...props}></div>;
}

export default Logo;
