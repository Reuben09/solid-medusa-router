import { createEffect, createSignal, For } from 'solid-js'
import { A } from "@solidjs/router"
import { Box, Typography, Grid, IconButton, Button } from "@suid/material";


function Product () {
  const [productData, setProductData] = createSignal([]);
  createEffect(async ()=> {
    const res = await fetch(`${import.meta.env.VITE_baseUrl}/store/products`);
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
  
      <Box sx={{margin: "0 2rem"}}>
      <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "2rem"}}>
        <For each={productData()}>
                {(productItem) => 
                 <A href={`/products/${productItem.id}`}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "rgb(231, 231, 231)",
                    height: "350px",
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
                  <Typography sx={{ padding: "1rem 0", textAlign: "center", fontWeight: "600" }}>
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
                  </A>
                }</For>
                  </Box>
      </Box>
    </Box>
    </>
  ) 
}

export default Product;