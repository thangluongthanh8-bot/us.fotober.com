export {};

declare global {
  interface Window {
    fbq: (eventType: string, eventName: string, params?: Record<string, any>) => void;
  }
}
