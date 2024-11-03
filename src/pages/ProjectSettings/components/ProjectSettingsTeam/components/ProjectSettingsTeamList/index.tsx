import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import AddIcon from "icons/AddIcon";
import DeleteIcon from "icons/DeleteIcon";
import ProjectSettingsTeamAdd from "../ProjectSettingsTeamAdd";

const mockTeamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "owner",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "member",
  },
];

export default function ProjectSettingsTeamList() {
  const [teamAddPopup, setTeamAddPopup] = useState(false);

  return (
    <>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon fontSize={18} />}
          onClick={() => setTeamAddPopup(true)}
        >
          Invite Member
        </Button>
      </Box>

      <Paper sx={{ mb: 4 }}>
        <List>
          {mockTeamMembers.map((member, index) => (
            <React.Fragment key={member.id}>
              {index > 0 && <Divider />}
              <ListItem
                secondaryAction={
                  member.role !== "owner" && (
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      sx={{ color: "error.main" }}
                    >
                      <DeleteIcon fontSize={18} />
                    </IconButton>
                  )
                }
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {member.name}
                      <Chip
                        label={member.role}
                        size="small"
                        color={member.role === "owner" ? "primary" : "default"}
                      />
                    </Box>
                  }
                  secondary={member.email}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {teamAddPopup ? (
        <ProjectSettingsTeamAdd onClose={() => setTeamAddPopup(false)} />
      ) : null}
    </>
  );
}
