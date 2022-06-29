import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  styled,
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EuroIcon from "@mui/icons-material/Euro";
import DescriptionIcon from "@mui/icons-material/Description";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import {
  addProduct,
  editProduct,
  getProductById,
} from "../../api/products/products";
import { useSnackbar } from "notistack";
import Loader from "../../shared-components/Loader/Loader";

interface IProductFormProps {
  open: boolean;
  handleClose: () => void;
  formType: "ADD" | "EDIT";
  getProducts: () => Promise<void>;
  productId?: string;
}

const Input = styled("input")({
  display: "none",
});

const ProductForm = ({
  open,
  handleClose,
  formType,
  getProducts,
  productId,
}: IProductFormProps) => {
  const token = localStorage.getItem("token");

  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const defaultFormValues = {
    name: "",
    description: "",
    quantity: 1,
    price: 1,
  };

  const [productDetailsFormData, setProductDetailsFormData] =
    useState(defaultFormValues);

  const handleChangeProductDetailsFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductDetailsFormData({
      ...productDetailsFormData,
      [event.target.name]: event.target.value,
    });
  };

  const [image, setImage] = useState<any>(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    image && setImageURL(URL.createObjectURL(image));
  }, [image]);

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const addNewProduct = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (token) {
      event.preventDefault();

      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("name", productDetailsFormData.name);
        formData.append("description", productDetailsFormData.description);
        formData.append("quantity", productDetailsFormData.quantity.toString());
        formData.append("price", productDetailsFormData.price.toString());
        formData.append("category", category);
        formData.append("image", image, image?.name);
        formData.append(
          "rating",
          Math.ceil(Math.random() * (3 - 5 + 1) + 3).toString()
        );

        const response = await addProduct(formData, token);
        setProductDetailsFormData(defaultFormValues);
        setCategory("");
        setImage(null);
        setImageURL("");
        handleClose();
        enqueueSnackbar(response.msg, {
          variant: "success",
        });
        getProducts();
      } catch (error: any) {
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

  const editProductDetails = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (token && productId) {
      event.preventDefault();

      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("name", productDetailsFormData.name);
        formData.append("description", productDetailsFormData.description);
        formData.append("quantity", productDetailsFormData.quantity.toString());
        formData.append("price", productDetailsFormData.price.toString());
        formData.append("category", category);
        image && formData.append("image", image, image?.name);

        const response = await editProduct(formData, token, productId);
        setProductDetailsFormData(defaultFormValues);
        setCategory("");
        setImage(null);
        setImageURL("");
        handleClose();
        enqueueSnackbar(
          `${response.name}'s details have been updated successfully.`,
          {
            variant: "success",
          }
        );
        getProducts();
      } catch (error: any) {
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

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    formType === "ADD" ? addNewProduct(event) : editProductDetails(event);
  };

  const getProductDetails = async () => {
    if (token && productId) {
      setLoading(true);
      try {
        const response = await getProductById(productId, token);
        setProductDetailsFormData({
          name: response.name,
          description: response.description,
          quantity: response.quantity,
          price: parseFloat(response.price),
        });
        setCategory(response.category);
        setImageURL(response.image);
      } catch (error: any) {
        setProductDetailsFormData(defaultFormValues);
        setCategory("");
        setImage(null);
        setImageURL("");
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
    if (token && productId && open) {
      getProductDetails();
    }
  }, [productId, open]);

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
          {formType === "ADD" ? "Add a new product" : "Edit a product"}
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
        <DialogContentText sx={{ marginBottom: "1rem" }}>
          Enter the product's details
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1rem",
              width: "30rem",
            }}
          >
            <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              required
              fullWidth
              id="input-with-sx"
              label="Product Name"
              variant="standard"
              name="name"
              value={productDetailsFormData.name}
              onChange={handleChangeProductDetailsFormData}
              disabled={loading}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1rem",
              width: "30rem",
            }}
          >
            <DescriptionIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              required
              id="input-with-sx"
              label="Product Description"
              variant="standard"
              multiline
              maxRows={4}
              name="description"
              value={productDetailsFormData.description}
              onChange={handleChangeProductDetailsFormData}
              disabled={loading}
            />
          </Box>
          <Grid container sx={{ marginBottom: "1rem" }}>
            <Grid item sx={{ paddingRight: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginBottom: "1rem",
                }}
              >
                <ProductionQuantityLimitsIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  required
                  id="input-with-sx"
                  label="Product Quantity"
                  variant="standard"
                  InputProps={{
                    type: "number",
                  }}
                  name="quantity"
                  value={productDetailsFormData.quantity}
                  onChange={handleChangeProductDetailsFormData}
                  disabled={loading}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginBottom: "1rem",
                }}
              >
                <EuroIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  required
                  id="input-with-sx"
                  label="Product Price"
                  variant="standard"
                  InputProps={{
                    type: "number",
                  }}
                  name="price"
                  value={productDetailsFormData.price}
                  onChange={handleChangeProductDetailsFormData}
                  disabled={loading}
                />
              </Box>
            </Grid>
          </Grid>
          <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
            <InputLabel id="simple-select-label">Product Category</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={category}
              label="Product Category"
              onChange={handleChange}
              required
              disabled={loading}
            >
              <MenuItem value={"kitchen"}>Kitchen</MenuItem>
              <MenuItem value={"bedroom"}>Bedroom</MenuItem>
              <MenuItem value={"bathroom"}>Bathroom</MenuItem>
              <MenuItem value={"living-room"}>Living Room</MenuItem>
              <MenuItem value={"outdoor"}>Outdoor</MenuItem>
              <MenuItem value={"office"}>Office</MenuItem>
            </Select>
          </FormControl>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              required
              onChange={(e) => {
                e.preventDefault();
                setImage(e?.target?.files && e?.target?.files[0]);
              }}
              disabled={loading}
            />
            <Button
              variant="contained"
              component="span"
              sx={{
                borderRadius: "2rem",
                background:
                  "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                textTransform: "none",
              }}
              disabled={loading}
            >
              Upload
            </Button>
          </label>
        </form>
        {imageURL && (
          <img
            src={imageURL}
            alt="uploaded"
            style={{ margin: "1rem 0", width: "8rem" }}
          />
        )}
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: "2rem",
                color: "#9849B0",
                borderColor: "#9849B0",
                ":hover": {
                  borderColor: "#9849B0",
                },
                textTransform: "none",
              }}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                borderRadius: "2rem",
                background:
                  "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
