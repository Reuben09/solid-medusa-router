import { Box, Typography } from "@suid/material";
import NewsLetter from "./NewsLetter";

function Footer (){
    return (
        <>
       <Box component="section" sx={{ marginBottom: "2rem" }}>
        <NewsLetter />
      </Box>
      <Box
      component="div"
      sx={{textAlign: "center", backgroundColor: "#1976D2", padding: "1rem" }}
      color="primary"
    >
      <Box
        component="a"
        sx={{textAlign: "center", color: "#fff" }}
        href="https://github.com/Reuben09"
      >
        created by Reuben09
      </Box>
    </Box>
        </>
    )
}

export default Footer;