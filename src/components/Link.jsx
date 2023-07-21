import NextLink from "next/link"

export function Link({href}) {
    return (
        <NextLink href={href}>
            <a>{children}</a>
        </NextLink>
    )
}