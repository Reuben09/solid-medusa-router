import { Box, Typography, IconButton, Button } from "@suid/material";
import ProductList from '../component/ProductList'
import Footer from '../component/Footer'

function Home (){
    return <div>
        <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          width: "100%",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "5rem"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            backgroundColor: "rgba(25, 118, 210, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#ffffff",
            }}
          >
            Reuben09
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              color: "#ffffff",
            }}
          >
            Sneakers
          </Typography>
          <Typography sx={{textAlign: "center", color: "#ffffff" }}>
            Users of the highest converting shopify theme deserve a lifestyle to
            match!
          </Typography>
          <Box sx={{marginTop: "1rem" }}>
            <IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{marginRight: "0.5rem" }}
              >
                Shop now
              </Button>
            </IconButton>
            <IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{marginLeft: "0.5rem" }}
              >
                Learn more
              </Button>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box component="div" sx={{marginBottom: "2rem" }}>
      <ProductList />
      </Box>
      <Box section="footer">
        <Footer />
      </Box>
    </div>
}

export default Home;