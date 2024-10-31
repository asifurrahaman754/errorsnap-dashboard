import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import AlertIcon from "icons/AlertIcon";
import { useNavigate } from "react-router-dom";
import { project } from "types/project";
import { cssColor } from "utils/colors";

export default function Project({ project }: { project: project }) {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/projects/${project.id}/errors`);
  };
  const errorCount = 0;

  return (
    <>
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          transition: "transform 0.2s",
          border: `1px solid ${cssColor("backgroundShade")}`,
          "&:hover": {
            transform: "translateY(-3px)",
            border: `1px solid ${cssColor("divider")}`,
          },
        }}
        onClick={handleProjectClick}
      >
        <CardContent>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" component="h2">
              {project.name}
            </Typography>
            <Chip
              icon={<AlertIcon fontSize={16} />}
              label={`${errorCount} errors`}
              size="small"
              color={errorCount > 0 ? "error" : "primary"}
            />
          </Box>

          <Typography color="text.secondary">{project.description}</Typography>
          <Typography variant="body2" color="text.secondary">
            Last error: 7th july
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
