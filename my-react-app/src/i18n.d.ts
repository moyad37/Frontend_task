declare module 'i18next' {
    interface I18n {
      addResourceBundle: (lang: string, ns: string, resources: any) => void;
      
    }
  }