import React from "react";
import iconLogo from "../../../public/Sign.svg";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";


const Header: React.FC = () => {

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f2f6fa" }}
      style={{
        borderBottom: "1px solid rgb(230, 241, 252)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box>
          <Image src={iconLogo} alt="Логотип" style={{ height: "40px" }} />
        </Box>

        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          <Typography variant="body1" component="div">
            <Link href="/">Товары</Link>
          </Typography>
          <Box sx={{ marginRight: "16px" }} />
          <Typography variant="body1" component="div">
            <Link href="/">Заказы</Link>
          </Typography>
        </Box>
 
        <Button style={{color:"#172029"}} startIcon={<ShoppingCartIcon />}>
          Корзина
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
