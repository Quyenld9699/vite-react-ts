import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Decimal } from '@cosmjs/math';
import { createContext, useContext, useState } from 'react';
import { BaseContextProps } from 'src/global.config';
import useNotifier from 'src/hooks/useNotifier';
import { chainConfig } from './config';

interface WalletContextData {
    isConnecting: boolean;
    address: string;
    client: SigningCosmWasmClient | null;
    connectWallet: () => Promise<void>;
}
const WalletContext = createContext({} as WalletContextData);

export function WalletProvider({ children }: BaseContextProps) {
    const [isConnecting, setConnecting] = useState(false);
    const { notifyError, notifyWarn, notifySuccess } = useNotifier();
    const [address, setAddress] = useState('');
    const [client, setClient] = useState<SigningCosmWasmClient | null>(null);
    async function connectWallet() {
        setConnecting(true);

        if (!window.keplr) {
            notifyWarn('You must install Keplr to continue');
        } else {
            try {
                try {
                    await window.keplr?.enable(chainConfig.chainId);
                } catch (err) {
                    // console.log((err as Error).message);
                    if ((err as Error).message == 'Request rejected') {
                        localStorage.setItem('isConnected', 'no');
                        throw Error('Request rejected');
                    } else {
                        await window.keplr.experimentalSuggestChain(chainConfig);
                    }
                }

                const offlineSigner = window.keplr.getOfflineSignerOnlyAmino(chainConfig.chainId);

                const accounts = await offlineSigner.getAccounts();
                setAddress(accounts[0].address);

                const coswasmStageGate = await SigningCosmWasmClient.connectWithSigner(chainConfig.rpc, offlineSigner, {
                    prefix: 'orai',
                    gasPrice: { amount: Decimal.fromUserInput('0', 0), denom: 'orai' },
                });

                window.keplr.defaultOptions = {
                    sign: {
                        preferNoSetFee: true,
                        preferNoSetMemo: true,
                    },
                };
                setClient(coswasmStageGate);
                notifySuccess('Successfully connected with address: ' + accounts[0].address);
                localStorage.setItem('isConnected', 'yes');
            } catch (err) {
                console.log(err as Error);
                notifyError((err as Error).message);
            }
        }
        setConnecting(false);
    }

    return <WalletContext.Provider value={{ address, isConnecting, client, connectWallet }}>{children}</WalletContext.Provider>;
}

export const useWalletContext = () => useContext(WalletContext);
