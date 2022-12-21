import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const HeaderTitle = ({ title, subtitle }) => {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb='20px' >
            <Typography variant = 'h5' color={colors.blue[400]} fontWeight = 'bold' sx={{mb:'3px'}}>{title}</Typography>
            <Typography variant = 'h6' color={colors.brightorange[400]} sx={{mb:'3px'}}>{subtitle}</Typography>
        </Box>
    )
}
export default HeaderTitle;