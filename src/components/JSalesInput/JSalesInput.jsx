import { useEffect, useState } from "react";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { useTonClient } from "../../hooks/useTonClient";
import AddressDisplay from "./AddressDisplay";
import { useTonTransaction } from "../../hooks/useTonTransaction";
import { useTranslation } from "react-i18next";

export default function JSalesInput() {
  const [jettonAmount, setJettonAmount] = useState(0);
  const [tonsToDisplay, settonsToDisplay] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const {
    sendTons,
    loading,
    msgHash,
    finalizedTx,
    responseMsg,
    responseError,
    setResponseError,
    setResponseMessage,
  } = useTonTransaction();
  const { client } = useTonClient();
  const oneJettonPrice = import.meta.env.VITE_JETTON_PRICE; // 1 nanoJetton = 1 nanoton
  const minterAdminAddr = import.meta.env.VITE_JETTON_MINTER_ADDRESS;
  const fees = import.meta.env.VITE_FORWARD_FEE;
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  const { t } = useTranslation();
  // CALCULATE TON AMOUNT
  useEffect(() => {
    const totalPrice = (jettonAmount * oneJettonPrice) + parseFloat(fees);
    settonsToDisplay(parseFloat(totalPrice.toFixed(3)).toString());
    const isBtnDisabled = jettonAmount == 0 || msgHash.length > 0 || responseError.length > 0;
    setBtnDisabled(isBtnDisabled);
    setResponseError("");
  }, [jettonAmount]);

  useEffect(() => {
    setJettonAmount(0);
    setResponseMessage("");
    setResponseError("");
  }, [wallet]);

  const handleSendTons = async () => {
    await sendTons(jettonAmount, client);
    setJettonAmount(0);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Image and Address */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="token-ffx-logo.webp"
          alt="Jetton logo"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <span className="text-sm text-gray-400 font-semibold">
          {t('sale.minter_address')}:
        </span>
        <div className="text-gray-700 text-lg font-semibold text-center">
          <AddressDisplay address={minterAdminAddr} />
        </div>
      </div>

      {/* Input for Jettons */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        ></label>
        <input
          type="number"
          id="amount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={jettonAmount}
          onChange={(e) => setJettonAmount(parseFloat(e.target.value))}
          placeholder="Enter amount"
          min="0"
          disabled={msgHash.length > 0 || responseError.length > 0}
        />
      </div>

      {/* SEND | CONNECT BUTTON */}
      {wallet ? (
        <button
          disabled={loading || btnDisabled}
          onClick={handleSendTons}
          className={`w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            btnDisabled
              ? "bg-blue-300 hover:bg-blue-300"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
            {t('sale.loading')}
            </>
          ) : (
            <>
              {t('sale.sent')}{" "}
              <span className="text-yellow-300 font-bold">{tonsToDisplay}</span>{" "}
              {t('elements.ton')}
            </>
          )}
        </button>
      ) : (
        <button
          onClick={() => tonConnectUi.openModal()}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {t('elements.connect_btn')}
        </button>
      )}

      {/* MESSAGE HASH | TEXTAREA */}
      {msgHash ? (
        <>
          <div className="mt-4">
            <p className="text-gray-400 font-bold">{t('sale.sent_msg_hash')}:</p>
            <p className="break-words">{msgHash}</p>
          </div>
          {finalizedTx ? (
            <>
              <div className="mt-2">
                <p className="text-gray-400 font-bold">{t('sale.sent_tx_hash')}:</p>
                <p className="break-words">
                  {finalizedTx?.hash().toString("hex")}
                </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          
        </>
      )}

      {/* RESULT | ERROR MESSAGE */}
      {responseMsg ? (
        <div className="mt-4 border-l-4 border-blue-600 text-center text-blue-700 font-mono">
          {responseMsg}
        </div>
      ) : (
        <></>
      )}
      {responseError ? (
        <div className="mt-4 border-l-4 border-rose-500 text-center text-rose-600 font-mono">
          {responseError}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
