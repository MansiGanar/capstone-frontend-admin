export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface IForgotPasswordDialog {
  open: boolean;
  handleClose: () => void;
}
