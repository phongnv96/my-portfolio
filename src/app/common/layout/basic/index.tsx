"use client";

import React, { useContext, useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";

import Loading from "@/app/common/components/Loading/loading";

import MouseCursor from "../../components/Mouse/MouseCursor";
import ConfigArea from "../../components/ThemeSetting/ConfigArea";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useBreakpoints } from "../../hooks/useBreakPoint";
import { ThemeContextType } from "../../types/themeConfig";
import Footer from "./Footer";
import Header from "./Header/Header";
import Script from "next/script";

interface Props {
  children: React.ReactNode;
}
const LayoutBasic = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { isLg } = useBreakpoints();
  const [loading, setLoadingPage] = useState<boolean>(true);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const onBodyLoaded = () => {};

  useEffect(() => {
    const timber = setTimeout(() => {
      setLoadingPage(false);
      clearTimeout(timber);
    }, 500);
    const timberHide = setTimeout(() => {
      setShowLoading(false);
      clearTimeout(timberHide);
    }, 2000);
  }, []);

  return (
    <body className={theme?.themeMode} onLoad={onBodyLoaded}>
      {showLoading && <Loading isLoading={loading} />}
      <Header />

      {props.children}
      {isLg && <MouseCursor />}
      <ConfigArea />
      <Footer />
      <Toaster position="top-center" />
      {/* <!-- Messenger Plugin chat Code --> */}
      <div id="fb-root"></div>

      {/* <!-- Your Plugin chat code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script
          id="messenger-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "115997714821744");
            chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        ></Script>
        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v16.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
              console.log(fjs.parentNode);
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script>
    </body>
  );
};
export default LayoutBasic;
