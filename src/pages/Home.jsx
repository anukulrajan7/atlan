import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { aiModel } from "../assets/json/AI_MODEL"
const Home = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCatgories, setSelectedCatgories] = useState([]);

    useEffect(() => {
        const categoriesData = [];
        aiModel?.forEach((model) => {
            console?.log(model?.category[0])

            const index = categoriesData?.findIndex((data) => data === model?.category[0])
            if (index === -1) {
                categoriesData?.push(model?.category[0])
            }
        })
        setCategories(["All Cateogry", ...categoriesData])

    }, [])
    console.log(categories)


    return (
        <Grid container>
            <Grid item xs={12} sx={{ background: "#ffff", width: "100%", padding: '20px', alignItems: 'cemter', justifyContent: 'center', display: "flex", flexDirection: 'column' }}>

                <h1 style={{ fontSize: "2rem", fontWeight: '600', color: "#6701EA", textAlign: 'center', marginTop: '1rem' }} className="roboto">Welcome to our AI Models Platform!</h1>
                <p style={{ fontSize: "1rem", fontWeight: '400', textAlign: 'center' }}>
                    Explore the power of Artificial Intelligence with our cutting-edge AI models.
                </p>
                <Grid container sx={{ width: "90%", justifyContent: 'space-between', justifyContent: 'center', marginX: 'auto' }}>
                    <Grid items xs={12} md={6} sx={{ width: '100%', display: "flex", flexDirection: "column", alignItems: 'start', padding: "20px", gap: ".75rem" }}>
                        <Typography sx={{ color: "#6701EA", fontSize: "1.5rem", fontWeight: '600' }}>Why Choose Our AI Models?</Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500' }}>State-of-the-art algorithms for superior performance</Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500' }}>Easy integration into your existing projects</Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500' }}>Continuous updates and improvements</Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500', whiteSpace: 'wrap' }}>Support for various use cases including image recognition, natural language processing, and more</Typography>


                    </Grid>
                    <Grid items xs={12} md={6} sx={{ textAlign: "justify", width: '100%', display: "flex", flexDirection: "column", alignItems: 'start', padding: "20px", gap: ".75rem" }}>
                        <Typography sx={{ color: "#6701EA", fontSize: "1.5rem", fontWeight: '600' }}>Get Started Today</Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500' }}>
                            Whether you're a developer, researcher, or business owner, our AI models have something for everyone.
                            Sign up now to access our extensive library of pre-trained models or upload your own data to train custom models.
                        </Typography>
                        <Typography sx={{ color: "#6701EA", fontSize: "1rem", fontWeight: '500' }}>
                            Start your journey into the world of AI today and unlock new possibilities for your projects!
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>

            <Grid item xs={12} sx={{ background: "#6701EA", width: "100%", padding: '20px', alignItems: 'cemter', justifyContent: 'center', display: "flex", flexDirection: 'column' }}>
                <Typography className="roboto" sx={{ color: "#fff", fontSize: "2rem", fontWeight: '600', textAlign: "center", marginY: "20px" }}>
                    Top Ai 10 Ai models
                </Typography>

                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                    <Grid xs={12} item sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexWrap: "wrap", gap: "1rem", }} >
                        {
                            categories && categories?.map((category) => {
                                return <Typography onClick={() => setSelectedCatgories(category)} sx={{ background: selectedCatgories === category ? "#000" : "#fff", color: selectedCatgories === category ? "#fff" : "#000", padding: "5px 10px", fontSize: "15px", fontWeight: '600', border: "1px solid #f2f2f2", borderRadius: '5px' }}>{category} </Typography>
                            })
                        }
                    </Grid>
                    {
                        aiModel &&
                        aiModel
                            .filter((model) =>

                                selectedCatgories === "All Cateogry" ? model : model.category[0]?.includes(selectedCatgories)
                            )
                            .slice(0, 10)
                            .map((model) => (
                                <Grid item xs={12} md={4} lg={3} sx={{ width: "100%", padding: "10px" }}>
                                    <Box sx={{
                                        background: "#fff", width: "100%", padding: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                        border: "1px solid #f2f2f2",
                                        borderRadius: "10px",
                                        display: 'flex',
                                        flexDirection: "column",
                                        alignItems: 'center',
                                        height: "470px",
                                        gap: ".8rem"
                                    }}>
                                        <Typography sx={{ background: "#6701EA", color: "#fff", padding: "5px", fontWeight: "bold", fontSize: "15px" }} className="roboto">
                                            <span>Categories: </span>{model?.category[0]}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center', fontWeight: "700", fontSize: "1rem", color: "#000" }}>Model Name: {model?.name}</Typography>
                                        <Typography sx={{ textAlign: 'justify', fontWeight: "500", fontSize: "14px" }}>Description: {model?.description}</Typography>

                                        <Typography>Use Cases</Typography>
                                        {model?.use_cases?.map((use, index) => (
                                            <Typography key={index} sx={{ fontSize: "14px" }}>{use}</Typography>
                                        ))}

                                        <Link style={{ width: "50%", background: "#000", textAlign: "center", padding: "8px 10px", color: "#fff", fontSize: "15px", fontWeight: "500", border: '1px solid #000', borderRadius: '5px' }} to={"/model_details/?model=" + model?.name}> Know More </Link>
                                        <Link style={{ width: "50%", background: "#000", textAlign: "center", padding: "8px 10px", color: "#fff", fontSize: "15px", fontWeight: "500", border: '1px solid #000', borderRadius: '5px' }} to={"/model_try/?model=" + model?.name}> Try Know </Link>
                                        <a style={{ width: "50%", background: "#6701EA", textAlign: "center", padding: "8px 10px", color: "#fff", fontSize: "15px", fontWeight: "500", border: '1px solid #000', borderRadius: '5px' }} target="_blank" href={model?.interaction?.link}> Go To Live Link</a>
                                    </Box>
                                </Grid>
                            ))
                    }

                    <Grid xs={12} md={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: "20px" }}>
                    </Grid>
                </Grid>

            </Grid>
        </Grid >

    );
}
export default Home;