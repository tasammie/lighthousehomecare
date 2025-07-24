declare module "@emailjs/browser" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey: string
  ): Promise<EmailJSResponseStatus>;

  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    publicKey: string
  ): Promise<EmailJSResponseStatus>;

  export function init(publicKey: string): void;

  const emailjs: {
    sendForm: typeof sendForm;
    send: typeof send;
    init: typeof init;
  };

  export default emailjs;
}
