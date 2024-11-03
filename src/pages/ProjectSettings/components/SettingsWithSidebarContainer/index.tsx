import {
  Grid2 as Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { setFunction } from "types/function";
import { cssColor } from "utils/colors";

export interface menuItem {
  path: setFunction<string, string>;
  component: ReactNode;
  icon: ReactNode;
  label: string;
}

export default function SettingsWithSidebarContainer({
  items,
}: {
  items: menuItem[];
}) {
  const location = useLocation();
  const { projectId } = useParams();

  const selectedItem = useMemo(
    () => items.find((item) => item.path(projectId) === location.pathname),
    [items, location.pathname, projectId]
  );

  return (
    <>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 3 }}>
          <List sx={{ width: "100%" }} component="nav">
            {items.map((item) => {
              const itemSelected = item.path(projectId) === location.pathname;

              return (
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  key={item.label}
                  to={item.path(projectId)}
                >
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      borderRadius: 2,
                      mb: 1,
                      backgroundColor: itemSelected
                        ? cssColor("backgroundShade")
                        : "transparent",

                      "&:hover": {
                        backgroundColor: cssColor("backgroundShade"),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>{selectedItem?.component}</Grid>
      </Grid>
    </>
  );
}
