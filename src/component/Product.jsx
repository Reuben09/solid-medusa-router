import { createEffect, createSignal, For } from 'solid-js'
import { A } from "@solidjs/router"
import { Box, Typography, Grid, IconButton, Button } from "@suid/material";


function Product () {
  const [productData, setProductData] = createSignal([]);
  createEffect(async ()=> {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json()
    setProductData(data.products)
  })
  return(
    <>
    <Box
      sx={{
        marginTop: "2rem",
        paddingLeft: {lg: "4rem", xs: "1.5rem" },
        paddingRight: {lg: "4rem", xs: "1.5rem" }
      }}
      component="section"
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginBottom: "2rem"
        }}
      >
        Featured Products
      </Typography>
  
      <Box>
      <Grid container spacing={2}>
        <For each={productData()}>
                {(productItem) => 
                 <A href={`/products/${productItem.id}`}>
                  <Grid item xs={12} sx={{backgroundColor: "#fff" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgb(231, 231, 231)",
                    height: "300px",
                    padding: "0.5rem"
                  }}
                >
                  <Box component="div" sx={{ height: "12rem" }}>
                    <Box
                      component="img"
                      src={productItem.thumbnail}
                      sx={{
                        height: "12rem",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </Box>
                  <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
                    {productItem.title}
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>
                    ${productItem.price}
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <IconButton>
                      <Button variant="outlined">Add</Button>
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
                  </A>
                }</For>
                  </Grid>
      </Box>
    </Box>
    </>
  ) 
}

export default Product;