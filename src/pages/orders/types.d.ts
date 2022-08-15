import { Order } from "../../api/orders/types";

export interface IListRowProps {
  order: Order;
  getOrdersList: () => Promise<void>;
}

export interface IConfirmDeleteDialog {
  open: boolean;
  handleClose: () => void;
  orderId: string;
  getOrdersList: () => Promise<void>;
}

export interface IConfirmCompleteDialog {
  open: boolean;
  handleClose: () => void;
  orderId: string;
  getOrdersList: () => Promise<void>;
}

export interface IViewOrderDialog {
  open: boolean;
  handleClose: () => void;
  orderId: string;
}

export interface IListRowActionMenuProps {
  handleClickOpen: (menuItemName: string) => void;
  orderStatus: string;
}
