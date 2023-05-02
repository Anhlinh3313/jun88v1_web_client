import stylesCss from "../../../../styles/HomeCSS/AppLanding.module.css";

const AppLanding = ({}) => {
  return (
    <div className={stylesCss["app-landing-section"]}>
        <div className={stylesCss["app-landing-container"]}>
            <header className={stylesCss["app-title"]}>Tải ứng dụng</header>
            <div className={stylesCss["home-app-landing"]}>
                <div className={stylesCss["download-container"]}>
                    <div className={stylesCss["download-item"]}>
                        <div className={stylesCss["qr-code"]}>
                            <svg className={stylesCss["qr-code-svg"]} height="300" width="300" viewBox="0 0 33 33" ><path fill="#FFFFFF" d="M0,0 h33v33H0z"></path><path fill="#000000" d="M0 0h7v1H0zM10 0h4v1H10zM16 0h1v1H16zM18 0h3v1H18zM22 0h2v1H22zM26,0 h7v1H26zM0 1h1v1H0zM6 1h1v1H6zM9 1h2v1H9zM13 1h4v1H13zM18 1h1v1H18zM20 1h1v1H20zM22 1h1v1H22zM24 1h1v1H24zM26 1h1v1H26zM32,1 h1v1H32zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM10 2h1v1H10zM13 2h1v1H13zM15 2h1v1H15zM18 2h2v1H18zM21 2h4v1H21zM26 2h1v1H26zM28 2h3v1H28zM32,2 h1v1H32zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h2v1H16zM20 3h5v1H20zM26 3h1v1H26zM28 3h3v1H28zM32,3 h1v1H32zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h3v1H8zM15 4h1v1H15zM17 4h5v1H17zM23 4h2v1H23zM26 4h1v1H26zM28 4h3v1H28zM32,4 h1v1H32zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM15 5h3v1H15zM20 5h3v1H20zM24 5h1v1H24zM26 5h1v1H26zM32,5 h1v1H32zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26,6 h7v1H26zM8 7h2v1H8zM12 7h1v1H12zM14 7h2v1H14zM21 7h2v1H21zM0 8h1v1H0zM2 8h5v1H2zM9 8h1v1H9zM11 8h3v1H11zM15 8h1v1H15zM17 8h1v1H17zM22 8h1v1H22zM24 8h1v1H24zM26 8h5v1H26zM1 9h2v1H1zM4 9h1v1H4zM7 9h3v1H7zM16 9h5v1H16zM23 9h1v1H23zM26 9h2v1H26zM29 9h2v1H29zM32,9 h1v1H32zM0 10h2v1H0zM4 10h7v1H4zM15 10h1v1H15zM17 10h2v1H17zM24 10h2v1H24zM28 10h1v1H28zM30 10h2v1H30zM1 11h1v1H1zM3 11h1v1H3zM5 11h1v1H5zM7 11h1v1H7zM9 11h3v1H9zM14 11h3v1H14zM19 11h3v1H19zM23 11h1v1H23zM25 11h2v1H25zM28 11h3v1H28zM0 12h3v1H0zM5 12h4v1H5zM18 12h2v1H18zM22 12h4v1H22zM28 12h2v1H28zM31 12h1v1H31zM0 13h2v1H0zM3 13h3v1H3zM9 13h12v1H9zM22 13h2v1H22zM26 13h1v1H26zM29 13h1v1H29zM31,13 h2v1H31zM1 14h2v1H1zM5 14h3v1H5zM10 14h2v1H10zM13 14h1v1H13zM22 14h1v1H22zM25 14h2v1H25zM28 14h4v1H28zM2 15h2v1H2zM5 15h1v1H5zM8 15h4v1H8zM13 15h1v1H13zM16 15h1v1H16zM19 15h3v1H19zM24 15h3v1H24zM28 15h3v1H28zM0 16h2v1H0zM3 16h2v1H3zM6 16h1v1H6zM8 16h3v1H8zM12 16h3v1H12zM17 16h3v1H17zM24 16h2v1H24zM27 16h2v1H27zM32,16 h1v1H32zM0 17h2v1H0zM3 17h1v1H3zM7 17h3v1H7zM11 17h1v1H11zM16 17h4v1H16zM21 17h7v1H21zM29,17 h4v1H29zM2 18h1v1H2zM4 18h5v1H4zM10 18h3v1H10zM14 18h2v1H14zM17 18h1v1H17zM20 18h3v1H20zM25 18h4v1H25zM30 18h2v1H30zM1 19h1v1H1zM3 19h3v1H3zM11 19h1v1H11zM14 19h1v1H14zM17 19h2v1H17zM21 19h3v1H21zM26 19h5v1H26zM0 20h3v1H0zM5 20h2v1H5zM8 20h1v1H8zM10 20h1v1H10zM13 20h4v1H13zM22 20h1v1H22zM24 20h2v1H24zM27 20h3v1H27zM32,20 h1v1H32zM0 21h1v1H0zM2 21h2v1H2zM10 21h1v1H10zM12 21h4v1H12zM17 21h3v1H17zM23 21h1v1H23zM26 21h1v1H26zM29 21h1v1H29zM32,21 h1v1H32zM0 22h1v1H0zM6 22h1v1H6zM9 22h2v1H9zM13 22h5v1H13zM21 22h1v1H21zM25 22h1v1H25zM27 22h1v1H27zM30 22h2v1H30zM0 23h1v1H0zM4 23h1v1H4zM11 23h1v1H11zM14 23h2v1H14zM21 23h1v1H21zM23 23h1v1H23zM25 23h2v1H25zM30 23h1v1H30zM32,23 h1v1H32zM0 24h1v1H0zM2 24h1v1H2zM5 24h2v1H5zM9 24h3v1H9zM13 24h1v1H13zM15 24h1v1H15zM17 24h1v1H17zM19 24h2v1H19zM23 24h6v1H23zM31 24h1v1H31zM8 25h1v1H8zM16 25h1v1H16zM19 25h1v1H19zM22 25h3v1H22zM28 25h1v1H28zM30 25h1v1H30zM32,25 h1v1H32zM0 26h7v1H0zM9 26h1v1H9zM12 26h1v1H12zM15 26h2v1H15zM18 26h1v1H18zM22 26h3v1H22zM26 26h1v1H26zM28 26h1v1H28zM30 26h2v1H30zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM10 27h2v1H10zM14 27h3v1H14zM19 27h3v1H19zM23 27h2v1H23zM28,27 h5v1H28zM0 28h1v1H0zM2 28h3v1H2zM6 28h1v1H6zM8 28h2v1H8zM11 28h2v1H11zM14 28h2v1H14zM18 28h1v1H18zM20 28h1v1H20zM24 28h6v1H24zM31,28 h2v1H31zM0 29h1v1H0zM2 29h3v1H2zM6 29h1v1H6zM8 29h1v1H8zM10 29h2v1H10zM14 29h3v1H14zM19 29h1v1H19zM22 29h2v1H22zM25 29h1v1H25zM28 29h2v1H28zM31,29 h2v1H31zM0 30h1v1H0zM2 30h3v1H2zM6 30h1v1H6zM8 30h6v1H8zM18 30h1v1H18zM21 30h1v1H21zM23 30h5v1H23zM29 30h1v1H29zM0 31h1v1H0zM6 31h1v1H6zM9 31h2v1H9zM14 31h1v1H14zM16 31h1v1H16zM18 31h1v1H18zM21 31h1v1H21zM25 31h2v1H25zM28 31h3v1H28zM0 32h7v1H0zM8 32h1v1H8zM10 32h5v1H10zM16 32h2v1H16zM19 32h2v1H19zM22 32h3v1H22zM27 32h1v1H27zM31 32h1v1H31z"></path></svg>
                        </div>
                        <div className={stylesCss["download-btn"]}>
                            <svg width="100%" height="100%" className={stylesCss["android"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 35.17" ><style></style><path fill="" d="M2.19 11.47H2.1a2.11 2.11 0 0 0-2.1 2.1v9.13a2.11 2.11 0 0 0 2.1 2.1h.09a2.1 2.1 0 0 0 2.09-2.1v-9.13a2.1 2.1 0 0 0-2.09-2.1zM5.29 26.22a1.92 1.92 0 0 0 1.93 1.92h2.06v4.94a2.09 2.09 0 0 0 2.09 2.09h.09a2.1 2.1 0 0 0 2.1-2.09v-4.94h2.88v4.94a2.1 2.1 0 0 0 2.1 2.09h.09a2.09 2.09 0 0 0 2.09-2.09v-4.94h2.07a1.93 1.93 0 0 0 1.92-1.92V11.81H5.29zM19.84 3.07L21.47.54a.35.35 0 0 0-.1-.48.34.34 0 0 0-.48.1l-1.7 2.61a11.24 11.24 0 0 0-8.38 0L9.11.16a.33.33 0 0 0-.48-.1.35.35 0 0 0-.1.48l1.63 2.53a8.29 8.29 0 0 0-4.94 7.29v.58h19.5v-.58a8.27 8.27 0 0 0-4.94-7.29zm-9.36 4.51a.93.93 0 1 1 .94-.93.93.93 0 0 1-.94.93zm9 0a.93.93 0 1 1 .94-.93.93.93 0 0 1-.94.93zM27.9 11.47h-.09a2.1 2.1 0 0 0-2.09 2.1v9.13a2.1 2.1 0 0 0 2.09 2.1h.09a2.11 2.11 0 0 0 2.1-2.1v-9.13a2.11 2.11 0 0 0-2.1-2.1z"></path></svg>
                            Tải Xuống
                        </div>
                    </div>
                    <div className={stylesCss["download-item"]}>
                        <div className={stylesCss["qr-code"]}>
                            <svg className={stylesCss["qr-code-svg"]} height="300" width="300" viewBox="0 0 33 33" ><path fill="#FFFFFF" d="M0,0 h33v33H0z"></path><path fill="#000000" d="M0 0h7v1H0zM10 0h4v1H10zM16 0h1v1H16zM18 0h3v1H18zM22 0h2v1H22zM26,0 h7v1H26zM0 1h1v1H0zM6 1h1v1H6zM9 1h2v1H9zM13 1h4v1H13zM18 1h1v1H18zM20 1h1v1H20zM22 1h1v1H22zM24 1h1v1H24zM26 1h1v1H26zM32,1 h1v1H32zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM10 2h1v1H10zM13 2h1v1H13zM15 2h1v1H15zM18 2h2v1H18zM21 2h4v1H21zM26 2h1v1H26zM28 2h3v1H28zM32,2 h1v1H32zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h2v1H16zM20 3h5v1H20zM26 3h1v1H26zM28 3h3v1H28zM32,3 h1v1H32zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h3v1H8zM15 4h1v1H15zM17 4h5v1H17zM23 4h2v1H23zM26 4h1v1H26zM28 4h3v1H28zM32,4 h1v1H32zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM15 5h3v1H15zM20 5h3v1H20zM24 5h1v1H24zM26 5h1v1H26zM32,5 h1v1H32zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26,6 h7v1H26zM8 7h2v1H8zM12 7h1v1H12zM14 7h2v1H14zM21 7h2v1H21zM0 8h1v1H0zM2 8h5v1H2zM9 8h1v1H9zM11 8h3v1H11zM15 8h1v1H15zM17 8h1v1H17zM22 8h1v1H22zM24 8h1v1H24zM26 8h5v1H26zM1 9h2v1H1zM4 9h1v1H4zM7 9h3v1H7zM16 9h5v1H16zM23 9h1v1H23zM26 9h2v1H26zM29 9h2v1H29zM32,9 h1v1H32zM0 10h2v1H0zM4 10h7v1H4zM15 10h1v1H15zM17 10h2v1H17zM24 10h2v1H24zM28 10h1v1H28zM30 10h2v1H30zM1 11h1v1H1zM3 11h1v1H3zM5 11h1v1H5zM7 11h1v1H7zM9 11h3v1H9zM14 11h3v1H14zM19 11h3v1H19zM23 11h1v1H23zM25 11h2v1H25zM28 11h3v1H28zM0 12h3v1H0zM5 12h4v1H5zM18 12h2v1H18zM22 12h4v1H22zM28 12h2v1H28zM31 12h1v1H31zM0 13h2v1H0zM3 13h3v1H3zM9 13h12v1H9zM22 13h2v1H22zM26 13h1v1H26zM29 13h1v1H29zM31,13 h2v1H31zM1 14h2v1H1zM5 14h3v1H5zM10 14h2v1H10zM13 14h1v1H13zM22 14h1v1H22zM25 14h2v1H25zM28 14h4v1H28zM2 15h2v1H2zM5 15h1v1H5zM8 15h4v1H8zM13 15h1v1H13zM16 15h1v1H16zM19 15h3v1H19zM24 15h3v1H24zM28 15h3v1H28zM0 16h2v1H0zM3 16h2v1H3zM6 16h1v1H6zM8 16h3v1H8zM12 16h3v1H12zM17 16h3v1H17zM24 16h2v1H24zM27 16h2v1H27zM32,16 h1v1H32zM0 17h2v1H0zM3 17h1v1H3zM7 17h3v1H7zM11 17h1v1H11zM16 17h4v1H16zM21 17h7v1H21zM29,17 h4v1H29zM2 18h1v1H2zM4 18h5v1H4zM10 18h3v1H10zM14 18h2v1H14zM17 18h1v1H17zM20 18h3v1H20zM25 18h4v1H25zM30 18h2v1H30zM1 19h1v1H1zM3 19h3v1H3zM11 19h1v1H11zM14 19h1v1H14zM17 19h2v1H17zM21 19h3v1H21zM26 19h5v1H26zM0 20h3v1H0zM5 20h2v1H5zM8 20h1v1H8zM10 20h1v1H10zM13 20h4v1H13zM22 20h1v1H22zM24 20h2v1H24zM27 20h3v1H27zM32,20 h1v1H32zM0 21h1v1H0zM2 21h2v1H2zM10 21h1v1H10zM12 21h4v1H12zM17 21h3v1H17zM23 21h1v1H23zM26 21h1v1H26zM29 21h1v1H29zM32,21 h1v1H32zM0 22h1v1H0zM6 22h1v1H6zM9 22h2v1H9zM13 22h5v1H13zM21 22h1v1H21zM25 22h1v1H25zM27 22h1v1H27zM30 22h2v1H30zM0 23h1v1H0zM4 23h1v1H4zM11 23h1v1H11zM14 23h2v1H14zM21 23h1v1H21zM23 23h1v1H23zM25 23h2v1H25zM30 23h1v1H30zM32,23 h1v1H32zM0 24h1v1H0zM2 24h1v1H2zM5 24h2v1H5zM9 24h3v1H9zM13 24h1v1H13zM15 24h1v1H15zM17 24h1v1H17zM19 24h2v1H19zM23 24h6v1H23zM31 24h1v1H31zM8 25h1v1H8zM16 25h1v1H16zM19 25h1v1H19zM22 25h3v1H22zM28 25h1v1H28zM30 25h1v1H30zM32,25 h1v1H32zM0 26h7v1H0zM9 26h1v1H9zM12 26h1v1H12zM15 26h2v1H15zM18 26h1v1H18zM22 26h3v1H22zM26 26h1v1H26zM28 26h1v1H28zM30 26h2v1H30zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM10 27h2v1H10zM14 27h3v1H14zM19 27h3v1H19zM23 27h2v1H23zM28,27 h5v1H28zM0 28h1v1H0zM2 28h3v1H2zM6 28h1v1H6zM8 28h2v1H8zM11 28h2v1H11zM14 28h2v1H14zM18 28h1v1H18zM20 28h1v1H20zM24 28h6v1H24zM31,28 h2v1H31zM0 29h1v1H0zM2 29h3v1H2zM6 29h1v1H6zM8 29h1v1H8zM10 29h2v1H10zM14 29h3v1H14zM19 29h1v1H19zM22 29h2v1H22zM25 29h1v1H25zM28 29h2v1H28zM31,29 h2v1H31zM0 30h1v1H0zM2 30h3v1H2zM6 30h1v1H6zM8 30h6v1H8zM18 30h1v1H18zM21 30h1v1H21zM23 30h5v1H23zM29 30h1v1H29zM0 31h1v1H0zM6 31h1v1H6zM9 31h2v1H9zM14 31h1v1H14zM16 31h1v1H16zM18 31h1v1H18zM21 31h1v1H21zM25 31h2v1H25zM28 31h3v1H28zM0 32h7v1H0zM8 32h1v1H8zM10 32h5v1H10zM16 32h2v1H16zM19 32h2v1H19zM22 32h3v1H22zM27 32h1v1H27zM31 32h1v1H31z"></path></svg>
                        </div>
                        <div className={stylesCss["download-btn"]}>
                        <svg width="100%" height="100%" className={stylesCss["ios"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 36.71"><style></style><path fill="" d="M1.55 13.49C-1.56 18.88.42 27.05 3.85 32c1.71 2.48 3.45 4.7 5.82 4.7h.14a7.36 7.36 0 0 0 2.7-.72 7.31 7.31 0 0 1 3.2-.76 7 7 0 0 1 3.05.73 6.32 6.32 0 0 0 2.92.7c2.67 0 4.32-2.45 5.77-4.56A20 20 0 0 0 30 26.92a.3.3 0 0 0-.16-.37 7.69 7.69 0 0 1-4.65-7 7.9 7.9 0 0 1 3.74-6.6.3.3 0 0 0 .14-.19.32.32 0 0 0-.05-.23 8.7 8.7 0 0 0-6.83-3.71 5.74 5.74 0 0 0-.6 0 12 12 0 0 0-4.28 1.07 7 7 0 0 1-2 .62 6.82 6.82 0 0 1-2.13-.62 10.16 10.16 0 0 0-3.74-.95h-.1a9.17 9.17 0 0 0-7.72 4.67zM22.17 0a8.42 8.42 0 0 0-5.53 2.84 7.82 7.82 0 0 0-2 5.82.31.31 0 0 0 .28.26h.39a7.11 7.11 0 0 0 5.22-2.68 8.24 8.24 0 0 0 1.94-6 .29.29 0 0 0-.3-.24z"></path></svg>
                            Tải Xuống
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AppLanding;