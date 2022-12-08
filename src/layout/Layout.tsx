import { ToggleOnOutlined } from '@mui/icons-material';
import { Box, Button, Divider, IconButton } from '@mui/material';
import { imagePath } from 'src/constants/imagePath';
import { useThemeContext } from 'src/contexts/theme-context/theme-context';
import { TypeNetwork } from 'src/contexts/wallet-context/types';
import { useWalletContext } from 'src/contexts/wallet-context/wallet-context';
import { MetaEnv } from 'src/global.config';
import useNotifier from 'src/hooks/useNotifier';

export default function Layout() {
    const { notifySuccess } = useNotifier();
    const { toggleThemeMode } = useThemeContext();
    const { address, connectWallet } = useWalletContext();

    const x: TypeNetwork = 'mainnet';
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

            <Divider />
            {x}
            <Box>address: {address || '---'}</Box>
            <Button variant="outlined" onClick={connectWallet}>
                Connect
            </Button>
        </Box>
    );
}
