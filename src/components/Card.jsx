import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 555, maxHeight: 900 }}>
            <CardActionArea>
                <CardMedia height="140px" maxWidth="800px" />
                <CardContent></CardContent>
            </CardActionArea>
            <CardActions></CardActions>
        </Card>
    );
}