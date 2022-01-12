interface IDefaultColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  newGray: string;
}

interface ITheme {
  dark: boolean;
  colors: IDefaultColors;
}

export const Theme: ITheme = {
  dark: false,
  colors: {
    primary: 'black',
    background: '#e5f1f6',
    card: '#FFFFFF',
    text: '#141414',
    border: '#7dc9e7',
    notification: '#ee7155',
    newGray: '#707070',
  },
};
