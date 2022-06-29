import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getProductById } from "../../api/products/products";
import { useSnackbar } from "notistack";
import { Product } from "../../api/products/types";
import Loader from "../../shared-components/Loader/Loader";

interface IViewProductDetailsDialogDialogProps {
  open: boolean;
  handleClose: () => void;
  productId: string;
}

const ViewProductDetailsDialog = ({
  open,
  handleClose,
  productId,
}: IViewProductDetailsDialogDialogProps) => {
  const token = localStorage.getItem("token");

  const [response, setResponse] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const getProductDetails = async () => {
    if (token) {
      setLoading(true);
      try {
        const response = await getProductById(productId, token);
        setResponse(response);
      } catch (error: any) {
        setResponse(null);
        enqueueSnackbar(
          error?.response?.data?.errors[0]?.msg ||
            error?.response?.data?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    open && getProductDetails();
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "2rem",
          padding: "1rem",
        },
        "& .MuiDialogContent-root::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <DialogTitle>
        <Typography fontWeight={500} fontSize={20} sx={{ marginRight: "2rem" }}>
          Product details
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 24,
            top: 24,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Loader />
        ) : (
          <>
            <img
              src={response?.image}
              alt="product"
              style={{
                width: "100%",
                height: "20rem",
                marginBottom: "2rem",
                borderRadius: "2rem",
              }}
            />
            <Grid container alignItems="center" sx={{ marginBottom: "2rem" }}>
              <Grid item sx={{ marginRight: ".7rem" }}>
                <Typography fontWeight={700} sx={{ color: "#858585" }}>
                  Product name:{" "}
                </Typography>
              </Grid>
              <Grid item>{response?.name}</Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ marginBottom: "2rem" }}>
              <Grid item sx={{ marginRight: ".7rem" }}>
                <Typography fontWeight={700} sx={{ color: "#858585" }}>
                  Product category:{" "}
                </Typography>
              </Grid>
              <Grid item>
                {response?.category?.toUpperCase()?.replaceAll("-", " ")}
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ marginBottom: "2rem" }}>
              <Grid item sx={{ marginRight: ".7rem" }}>
                <Typography fontWeight={700} sx={{ color: "#858585" }}>
                  Product description:{" "}
                </Typography>
              </Grid>
              <Grid item>{response?.description}</Grid>
            </Grid>
            <Grid container sx={{ marginBottom: "2rem" }}>
              <Grid item sm={6}>
                <Grid
                  container
                  alignItems="center"
                  sx={{ paddingRight: "2rem" }}
                >
                  <Grid item sx={{ marginRight: ".7rem" }}>
                    <Typography fontWeight={700} sx={{ color: "#858585" }}>
                      Product quantity:{" "}
                    </Typography>
                  </Grid>
                  <Grid item>{response?.quantity} units</Grid>
                </Grid>
              </Grid>
              <Grid item sm={6}>
                <Grid container alignItems="center">
                  <Grid item sx={{ marginRight: ".7rem" }}>
                    <Typography fontWeight={700} sx={{ color: "#858585" }}>
                      Product price:{" "}
                    </Typography>
                  </Grid>
                  <Grid item>{`€ ${response?.price}`}</Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography
              component="legend"
              fontWeight={700}
              sx={{ color: "#858585" }}
            >
              User Rating
            </Typography>
            <Rating
              name="read-only"
              value={parseFloat(response?.rating || "0")}
              readOnly
              precision={0.5}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewProductDetailsDialog;
