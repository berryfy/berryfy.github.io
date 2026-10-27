export interface PaletteSwatch {
  role: string;
  hex: string;
}

export interface PaletteTheme {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
}

export interface PaletteCandidate {
  id: string;
  name: string;
  berry: string;
  mood: string;
  strengths: string;
  risks: string;
  swatches: readonly PaletteSwatch[];
  light: PaletteTheme;
  dark: PaletteTheme;
}
