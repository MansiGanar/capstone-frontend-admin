import React from "react";
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
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EuroIcon from "@mui/icons-material/Euro";
import DescriptionIcon from "@mui/icons-material/Description";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";

interface IAddProductFormProps {
  open: boolean;
  handleClose: () => void;
}

const Input = styled("input")({
  display: "none",
});

const AddProductForm = ({ open, handleClose }: IAddProductFormProps) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "2rem",
          padding: "1rem",
        },
      }}
    >
      <DialogTitle>
        Add a new product
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
        <form>
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
              multiple
              type="file"
              required
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
            >
              Upload
            </Button>
            <Typography sx={{ margin: ".5rem 0", color: "#858585" }}>
              * Please upload a maximum of 3 images only.
            </Typography>
          </label>
        </form>
      </DialogContent>
      <DialogActions>
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
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
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
      </DialogActions>
    </Dialog>
  );
};

export default AddProductForm;
