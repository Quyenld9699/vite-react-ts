import { OptionsObject, useSnackbar } from 'notistack';

type SnackbarOptions = OptionsObject | undefined;

export const ERR_TOP_CENTER: SnackbarOptions = {
    variant: 'error',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const WARNING_TOP_CENTER: SnackbarOptions = {
    variant: 'warning',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const INFO_TOP_CENTER: SnackbarOptions = {
    variant: 'info',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const SUCCESS_TOP_CENTER: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 1500,
};

export const SUCCESS_BOTTOM_CENTER: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
};

export const SUCCESS_BOTTOM_RIGHT: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
};

export default function useNotifier() {
    const { enqueueSnackbar } = useSnackbar();

    const notifyError = (msg: string, custom?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...ERR_TOP_CENTER, ...custom });
    };

    const notifySuccess = (msg: string, custom?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...SUCCESS_TOP_CENTER, ...custom });
    };

    const notifyInfo = (msg: string, custom?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...INFO_TOP_CENTER, ...custom });
    };

    const notifyWarn = (msg: string, custom?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...WARNING_TOP_CENTER, ...custom });
    };

    return {
        notifyError,
        notifyInfo,
        notifySuccess,
        notifyWarn,
    };
}
