import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export const Comments = ({ comments }) => {
	console.log(comments);
	return (
		<>
			{!comments.length ? (
				<p>{`No Comments :( `}</p>
			) : (
				<ul>
					{comments.map((comment) => (
						<li key={comment.comment_id}>
							<Card sx={{ display: "block", maxWidth: "75%", margin: "auto" }}>
								<CardContent>
									<Typography
										sx={{ margin: "auto", textAlign: "left" }}
										variant="body2">
										{comment.author}
									</Typography>
									<br />
									<Typography
										sx={{ margin: "auto", paddingX: 5, textAlign: "left" }}
										variant="body1">
										{comment.body}
									</Typography>
								</CardContent>
								<CardActions>
									<IconButton aria-label="add to favourites">
										<FavoriteIcon />
									</IconButton>
									<IconButton aria-label="share">
										<ShareIcon />
									</IconButton>
								</CardActions>
							</Card>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
