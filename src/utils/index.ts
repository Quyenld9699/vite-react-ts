import BigNumber from 'bignumber.js';

export function isNumeric(num: any) {
    return !isNaN(num) && !isNaN(parseFloat(num));
}

/**
 * Cast a value to BigNumber instance.
 * @param value - The value
 * @returns An instance of BigNumber or NaN if value isn't a valid number.
 */
export function BN(value: any): BigNumber {
    return new BigNumber(value);
}

export function getErrorMessage(error: any): string | undefined {
    return error ? error.reason ?? error.message : undefined;
}

export function handleError(error: any, notify?: (msg: string) => void) {
    const msg = getErrorMessage(error);
    if (msg && typeof notify === 'function') {
        notify(msg);
    }
}

export function toUSD(amount?: string | number, price?: string | number): string {
    return BN(amount).times(BN(price)).toString();
}
