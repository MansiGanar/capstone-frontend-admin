import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Page from "../../shared-components/Page/Page";
import ListHeader from "./ListHeader";
import ListRow from "./ListRow";
import ProductForm from "./ProductForm";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../api/products/products";
import { useSnackbar } from "notistack";
import {
  GetAllProductsResponse,
  GetProductsByCategoryResponse,
} from "../../api/products/types";
import Loader from "../../shared-components/Loader/Loader";

const Products = () => {
  const token = localStorage.getItem("token");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [category, setCategory] = useState("all");

  const handleClickCategory = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setCategory(e.currentTarget.id);
  };

  const selectedCategoryStyles = (id: string) =>
    category === id
      ? {
          borderBottom: "4px solid #9849B0",
          padding: "0 0.5rem 0.5rem 0.5rem",
          color: "#9849B0",
        }
      : { padding: "0 0.5rem 0.5rem 0.5rem" };

  const [response, setResponse] = useState<
    GetProductsByCategoryResponse | GetAllProductsResponse | null
  >(null);
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const getProducts = async () => {
    if (token) {
      setLoading(true);
      try {
        const response =
          category === "all"
            ? await getAllProducts(token)
            : await getProductsByCategory(category, token);
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
    getProducts();
    // eslint-disable-next-line
  }, [category]);

  return (
    <Page>
      <Typography
        fontWeight={700}
        fontSize={16}
        sx={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        Products Management
      </Typography>
      <Grid container>
        <Grid item sm>
          <Typography fontWeight={700} fontSize={24}>
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: "2rem",
              textTransform: "none",
              padding: ".5rem 2rem",
              background:
                "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
            }}
            onClick={handleClickOpen}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ margin: "1rem 0 0 0" }} gap="1rem">
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            sx={selectedCategoryStyles("all")}
            id="all"
            onClick={handleClickCategory}
          >
            All
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            sx={selectedCategoryStyles("kitchen")}
            id="kitchen"
            onClick={handleClickCategory}
          >
            Kitchen
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            id="bedroom"
            sx={selectedCategoryStyles("bedroom")}
            onClick={handleClickCategory}
          >
            Bedroom
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            id="bathroom"
            sx={selectedCategoryStyles("bathroom")}
            onClick={handleClickCategory}
          >
            Bathroom
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            id="living-room"
            sx={selectedCategoryStyles("living-room")}
            onClick={handleClickCategory}
          >
            Living Room
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            id="outdoor"
            sx={selectedCategoryStyles("outdoor")}
            onClick={handleClickCategory}
          >
            Outdoor
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <Typography
            id="office"
            sx={selectedCategoryStyles("office")}
            onClick={handleClickCategory}
          >
            Office
          </Typography>
        </Grid>
      </Grid>
      {loading ? (
        <Box sx={{ textAlign: "center", marginTop: "5rem" }}>
          <Loader />
        </Box>
      ) : (
        <Box
          sx={{
            padding: "3rem",
            border: "2px solid #F0F0F0",
            borderRadius: ".5rem",
            marginTop: "2rem",
            background: "#FFFFFF",
          }}
        >
          <ListHeader category={category} />
          {response?.products.map((product, index) => (
            <ListRow
              product={product}
              key={`product-list-row-item-${index}`}
              getProducts={getProducts}
              category={category}
            />
          ))}
        </Box>
      )}
      <ProductForm
        open={open}
        handleClose={handleClose}
        formType={"ADD"}
        getProducts={getProducts}
      />
    </Page>
  );
};

export default Products;
