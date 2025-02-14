interface ZESettings {
  webWidget: {
    color?: {
      theme: string;
    };
    position?: {
      horizontal: 'left' | 'right';
      vertical: 'top' | 'bottom';
    };
    offset?: {
      horizontal: string;
      vertical: string;
    };
    launcher?: {
      chatLabel?: {
        '*': string;
      };
    };
  };
}

interface Window {
  zESettings?: ZESettings;
  zE?: ((...args: unknown[]) => void) | Record<string, unknown>;
} 