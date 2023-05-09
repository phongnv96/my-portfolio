"use client";

import "./globals.css";

import ThemeProvider from "./common/contexts/ThemeContext";
import LayoutBasic from "./common/layout/basic";
import Script from "next/script";

// eslint-disable-next-line @next/next/no-document-import-in-page
import { NextScript } from "next/document";
import { useEffect, useRef } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const messengerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messengerRef.current) {

      messengerRef.current.setAttribute("attribution", "biz_inbox");

      messengerRef.current.setAttribute("page_id", "115997714821744");

      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,

          version: "v16.0",
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) return;

        js = d.createElement(s);

        js.id = id;

        (js as any).src =
          "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";

        (fjs as any)?.parentNode?.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);
  return (
    <ThemeProvider>
      <html lang="en">
        <>
          <title>Dev Cỏ</title>
          <link rel="icon" type="image/x-icon" href="/com-laptop-code.svg" />
          <meta name="description" content="Nguyen Van Phong Portfolio"></meta>
          <meta
            property="og:title"
            content="Hello guys, My name is Phong, I'm a web developer and this is my portfolio!"
          />
          <meta property="og:image:url" content="/images/coding.png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta name="robots" content="index" />
        </>
        <LayoutBasic>{children}</LayoutBasic>
        {/* <!-- Messenger Plugin chat Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Plugin chat code --> */}
        <div id="fb-customer-chat" className="fb-customerchat" ref={messengerRef}></div>

        {/* <Script
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
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script>
        <NextScript /> */}
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
