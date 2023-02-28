import { AiOutlineShoppingCart } from 'solid-icons/ai'
import { A } from "@solidjs/router"
import { Box}  from "@suid/material";
import { Typography, IconButton, AppBar, Toolbar } from "@suid/material";
import ShoppingCartIcon from "@suid/icons-material/ShoppingCart";

const Header = () => {
    return<Box>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "row"
            },
            justifyContent: "space-between"
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              marginBottom: { lg: "0", md: "0.7rem", sm: "0.7rem", xs: "0" }
            }}
          >
            Reuben09
          </Typography>
          </Box>

          <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: { lg: "0", md: "0.7rem", sm: "0.7rem", xs: "0" }
                }}
              >
                <A href="/">
                  <Typography
                    sx={{
                      marginRight: "1rem",
                      fontSize: "1.1rem",
                      cursor: "pointer"
                    }}
                  >
                    Home
                  </Typography>
                </A>
                <A href="/products">
                  <Typography
                    sx={{
                      marginRight: "1rem",
                      fontSize: "1.1rem",
                      cursor: "pointer"
                    }}
                  >
                    Products
                  </Typography>
                </A>
                <IconButton>
                <ShoppingCartIcon sx={{ color: "#fff" }} />
                 </IconButton>
                </Box>
          </Toolbar>
          </AppBar>
          </Box> 
 };
 
 export default Header;