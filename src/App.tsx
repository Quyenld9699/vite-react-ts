import { Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import React from 'react';
import { ThemeCustomProvider } from './contexts/theme-context/theme-context';
import RouterUrl from './routes';

const notistackRef = React.createRef<SnackbarProvider>();
const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef?.current?.closeSnackbar(key);
};
export default function App() {
    return (
        <ThemeCustomProvider>
            <SnackbarProvider
                maxSnack={3}
                ref={notistackRef}
                preventDuplicate
                action={(key) => (
                    <IconButton size="small" color="inherit" onClick={onClickDismiss(key)}>
                        <Clear style={{ cursor: 'pointer' }} />
                    </IconButton>
                )}
            >
                <RouterUrl />
            </SnackbarProvider>
        </ThemeCustomProvider>
    );
}
