import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button, Box, List, ListItem, ListItemText } from "@mui/material";

const AiModels = () => {
    const [history, setHistory] = useState([]);
    const [inputData, setInputData] = useState("");

    const handleSubmission = () => {
        // Handle submission logic here
        console.log("Submitted:", inputData);
        // Update history
        setHistory([...history, inputData]);
        // Reset input field
        setInputData("");
    };

    return (
        <Grid container spacing={2}>
            {/* Left Sidebar */}
            <Grid item xs={3}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h6">History</Typography>
                        <List>
                            {history.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Paper>
            </Grid>

            {/* Main Content */}
            <Grid item xs={6}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h6">Generate Text</Typography>
                        <TextField
                            label="Enter Text"
                            variant="outlined"
                            fullWidth
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmission}
                            sx={{ mt: 2 }}
                        >
                            Generate
                        </Button>
                    </Box>
                </Paper>
            </Grid>

            {/* Right Sidebar */}
            <Grid item xs={3}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h6">Submission Options</Typography>
                        <Button variant="contained" sx={{ mt: 2, mb: 1 }} fullWidth>
                            Image
                        </Button>
                        <Button variant="contained" sx={{ mb: 1 }} fullWidth>
                            Text
                        </Button>
                        <Button variant="contained" sx={{ mb: 1 }} fullWidth>
                            Audio
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmission}
                        >
                            Submit
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AiModels;
