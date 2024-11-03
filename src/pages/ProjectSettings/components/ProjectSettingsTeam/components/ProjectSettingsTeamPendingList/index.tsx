import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import CloseIcon from "icons/CloseIcon";
import React from "react";
import { cssColor } from "utils/colors";

const mockPendingMembers = [
  {
    id: "p1",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    invitedAt: "2024-02-20T10:30:00Z",
  },
  {
    id: "p2",
    name: "Alex Thompson",
    email: "alex@example.com",
    invitedAt: "2024-02-19T15:45:00Z",
  },
];

export default function ProjectSettingsTeamPendingList() {
  return (
    <>
      <Paper>
        <List>
          {mockPendingMembers.map((member, index) => (
            <React.Fragment key={member.id}>
              {index > 0 && <Divider />}
              <ListItem
                sx={{
                  "& .MuiButton-root": {
                    visibility: "hidden",
                  },
                  "&:hover .MuiButton-root": {
                    visibility: "visible",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {member.name}
                    </Box>
                  }
                  secondary={member.email}
                />
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<CloseIcon fontSize={16} />}
                    onClick={() => {}}
                    sx={{
                      color: cssColor("error"),
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </>
  );
}
