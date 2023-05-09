declare global {
  interface Window {
    fbAsyncInit: any; // 👈️ turn off type checking
    FB: any;
  }
}
export {};
