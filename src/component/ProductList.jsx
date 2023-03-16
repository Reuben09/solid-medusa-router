import { createEffect, createSignal, For } from 'solid-js'
import { A } from "@solidjs/router"
import { Box, Typography, Link, Grid } from "@suid/material";
import { medusaClient } from '../utils/client.js'


function ProductList () {
  const [products, setProducts] = createSignal([]);
  createEffect(()=> {
    const fetchProducts = async () => {
      const res = await medusaClient.products.list();
      setProducts(res.products)
  }
  fetchProducts()
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
      <Grid container spacing={1}>
        <For each={products()}>
                {(product) => 
                 <Grid item lg={3} xs={6} sm={6} sx={{ backgroundColor: "#fff" }}>
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
                      src={product?.thumbnail}
                      sx={{
                        height: "12rem",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </Box>
                  <Typography sx={{ padding: "1rem 0", textAlign: "center", fontWeight: "600" }}>
                    {product?.title}
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>
                  &euro; {product?.variants[0].prices[0].amount / 100 }
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                  <Link underline="always">
                  <A href={`/products/${product.id}`}>
                  See product
                    </A>
                    </Link>
                  </Box>
                </Box>
                </Grid>
                }</For>
              </Grid>
                  {/* </Box> */}
      </Box>
    </Box>
    </>
  ) 
}

export default ProductList;