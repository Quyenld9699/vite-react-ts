import { ChainInfo } from '@keplr-wallet/types';

export const chainConfig: ChainInfo = {
    chainId: 'Oraichain-testnet',
    chainName: 'Orai Test',
    rpc: 'https://testnet-rpc.orai.io',
    rest: 'https://testnet-lcd.orai.io',
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: 'orai',
        bech32PrefixAccPub: 'orai' + 'pub',
        bech32PrefixValAddr: 'orai' + 'valoper',
        bech32PrefixValPub: 'orai' + 'valoperpub',
        bech32PrefixConsAddr: 'orai' + 'valcons',
        bech32PrefixConsPub: 'orai' + 'valconspub',
    },
    currencies: [
        {
            coinDenom: 'ORAI',
            coinMinimalDenom: 'orai',
            coinDecimals: 6,
            coinGeckoId: 'oraichain-token',
        },
    ],
    feeCurrencies: [
        {
            coinDenom: 'ORAI',
            coinMinimalDenom: 'orai',
            coinDecimals: 6,
            coinGeckoId: 'oraichain-token',
        },
    ],
    stakeCurrency: {
        coinDenom: 'ORAI',
        coinMinimalDenom: 'orai',
        coinDecimals: 6,
        coinGeckoId: 'oraichain-token',
    },
    coinType: 118,
};
