import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/User";

import styles from "../../../styles/Home.module.css";

const QRcodes = () => {
    const { qrcodes } = useContext(UserContext);

    const [qr, setQr] = useState("");
	
    const clickHandler = e => {
        console.log(e.target);
        const options = document.querySelectorAll(`.${styles.Hns__option}`);
        options.forEach(option => {
            option.classList.remove(styles.Active);
        });
        e.target.classList.add(styles.Active);
    };

    useEffect(() => {
        if (typeof window !== "undefined")
            setQr(qrcodes[0] ? qrcodes[0].qrcode : "");

    }, [qrcodes]);

    return (<>
        <div className={[styles.Widget__card]}>
            <div className={styles.Hns__addresses}>
                <span className={styles.Hns__wallets}>
                    {qrcodes.map((address, i) => (
                        <div
                            className={[styles.Hns__option, i === 0 ? styles.Active : ""].join(" ")}
                            key={i}
                            onClick={e => {
                                setQr(address.qrcode);
                                clickHandler(e);
                            }}
                        >
                            {address.name}
                        </div>
                    ))}
                    <div 
                        className={styles.Hns__settings}
                        onClick={e => {
                            console.log("config")  
                        }}
                    >
                        Settings
                    </div>
                </span>
                <span className={styles.Hns__Qrcode}>
                    <Image
                        src={qr}
                        alt="qrcode"
                        width={168}
                        height={168} 
                        className={styles.Hns__stdout}
                    />
                </span>
            </div>
        </div>
    </>);
};

export default QRcodes;