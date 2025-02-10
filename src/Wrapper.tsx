import { Box } from "@mui/material"
import { ReactNode } from "react"

export const Wrapper = ({children}:{children:ReactNode}) => {
    return (
        <Box>
            {children}
        </Box>
    )
}