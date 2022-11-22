import { ToggleOnOutlined } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { imagePath } from 'src/constants/imagePath';
import { useThemeContext } from 'src/contexts/theme-context/theme-context';
import { MetaEnv } from 'src/global.config';
import useNotifier from 'src/hooks/useNotifier';

export default function Layout() {
    const { notifySuccess } = useNotifier();
    const { toggleThemeMode } = useThemeContext();
    return (
        <Box>
            <Box>
                <img src={imagePath.LOGO} alt="Logo" />
            </Box>
            <Box>
                <Button variant="contained" onClick={() => notifySuccess('Em chao anh Quyen', { autoHideDuration: 3000 })}>
                    Click
                </Button>
            </Box>
            <IconButton onClick={toggleThemeMode}>
                <ToggleOnOutlined />
            </IconButton>
            <Box>{MetaEnv.VITE_PORT}</Box>
        </Box>
    );
}
