import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { searchSchema } from "../services/validationSchemas/searchSchema";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import * as yup from "yup";
import styles from "./index.module.css";

export default function Index() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {},
    validationSchema: searchSchema,
    onSubmit: () => {
      router.push(`/collection/${formik.values.addressInput}`);
    },
  });

  return (
    <div className={styles.landingPage}>
      <Typography variant="h1Bold">Insert a NFT Collection Address to browse</Typography>
      <Paper
        elevation={12}
        sx={{ display: "flex", flexDirection: "column", width: "fit-content", m: 3, p: 3 }}
      >
        <form className={styles.searchForm} onSubmit={formik.handleSubmit}>
          <TextField
            id="addressInput"
            name="addressInput"
            label="Collection Address"
            value={formik.values.addressInput}
            onChange={formik.handleChange}
            error={formik.touched.addressInput && Boolean(formik.errors.addressInput)}
            placeholder="Insert Collection Address"
            sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
            helperText={Boolean(formik.errors.addressInput) && formik.errors.addressInput}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ m: 2, width: "25ch" }}
          >
            SEARCH COLLECTION
          </Button>
        </form>
      </Paper>
      <Box>
        <Typography>Recomended Collections</Typography>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            router.push("/collection/0xbd3531da5cf5857e7cfaa92426877b022e612cf8");
          }}
        >
          Pudgy Penguins
        </Button>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            router.push("/collection/0x2efa07cac3395599db83035d196f2a0e7263f766");
          }}
        >
          The Flower Girls
        </Button>
      </Box>
    </div>
  );
}
