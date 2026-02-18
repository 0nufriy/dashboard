"use client";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  People,
  BarChart,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const drawerWidth = 250;

const menuItems = [
  { text: "Overview", icon: <Dashboard fontSize="small" />, href: "/" },
  { text: "Orders", icon: <ShoppingCart fontSize="small" />, href: "/orders" },
  { text: "Customers", icon: <People fontSize="small" />, href: "/customers" },
  { text: "Reports", icon: <BarChart fontSize="small" />, href: "/reports" },
];

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <>
      <Box sx={{ px: 3, pt: 4, pb: 3 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#7c6af7",
            letterSpacing: 4,
            fontSize: { xs: 8, sm: 10 },
            display: "block",
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          NEXUS
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 0.5,
            fontSize: { xs: 14, sm: 20 },
          }}
        >
          ADMIN
        </Typography>
        <Box
          sx={{
            mt: 1.5,
            width: 32,
            height: 2,
            background: "linear-gradient(90deg, #7c6af7, transparent)",
            borderRadius: 1,
          }}
        />
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

      <List sx={{ px: 1.5, pt: 2, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = item.href === pathname;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Перейти на ${item.text}`}
                sx={{
                  borderRadius: 2,
                  py: 1.2,
                  px: 1.5,
                  position: "relative",
                  background: isActive
                    ? "rgba(124,106,247,0.12)"
                    : "transparent",
                  "&:hover": {
                    background: isActive
                      ? "rgba(124,106,247,0.18)"
                      : "rgba(255,255,255,0.04)",
                  },
                  "&::before": isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 3,
                        height: 20,
                        background: "#7c6af7",
                        borderRadius: "0 3px 3px 0",
                      }
                    : {},
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: isActive ? "#a599f9" : "#4a4d6a",
                    fontSize: { xs: 18, sm: 20 },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: { xs: 12, sm: 14 },
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#c4bcff" : "#6b6e88",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 2.5,
            px: 1.5,
            py: 1.2,
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #7c6af7, #c855f7)",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            A
          </Avatar>
          <Box sx={{ display: "block" }}>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                color: "#d0d2e8",
                lineHeight: 1.3,
              }}
            >
              Admin
            </Typography>
            <Typography sx={{ fontSize: 10, color: "#4a4d6a" }}>
              admin@nexus.io
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          background: "#0f1117",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          p: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontWeight: 700, fontSize: 16 }}
        >
          NEXUS
        </Typography>
        <IconButton
          color="inherit"
          aria-label="toggle menu"
          onClick={handleDrawerToggle}
          sx={{ color: "#7c6af7" }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Drawer
        variant="permanent"
        aria-label="Nav Menu"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#0f1117",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        aria-label="Nav Menu Mobile"
        sx={{
          display: { xs: "block", sm: "none" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#0f1117",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
}
