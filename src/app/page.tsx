"use client";
import { Box, Container, Typography } from "@mui/material";
import { PageHeader } from "@/components/PageHeader";
import StatsCards from "@/components/StatsCards";
import MainChart from "@/components/MainChart";

export default function Dashboard() {
  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 5 },
          overflowY: "auto",
          width: "100%"
        }}
      >
        <PageHeader pretitle="Good morning" title="Dashboard Overview" />

        <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3.5 } }}>
          <StatsCards />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            alignItems: "stretch",
            flexWrap: "wrap",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box sx={{ flex: { xs: "1 1 100%", lg: "2 1 420px" } }}>
            <MainChart />
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", lg: "1 1 220px" },
              background:
                "linear-gradient(135deg, #1a1245 0%, #130d2e 60%, #0d1833 100%)",
              border: "1px solid rgba(124,106,247,0.2)",
              borderRadius: 3,
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 140,
                height: 140,
                background:
                  "radial-gradient(circle, rgba(124,106,247,0.25), transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -30,
                left: -20,
                width: 100,
                height: 100,
                background:
                  "radial-gradient(circle, rgba(200,85,247,0.15), transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1, flex: 1 }}>
              <Box
                sx={{
                  display: "inline-block",
                  fontSize: { xs: 8, sm: 9 },
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#a599f9",
                  background: "rgba(124,106,247,0.15)",
                  border: "1px solid rgba(124,106,247,0.3)",
                  borderRadius: 100,
                  px: 1.5,
                  py: 0.4,
                  mb: 2.5,
                }}
              >
                Insight
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  mb: 1.5,
                  fontSize: { xs: 16, sm: 18, md: 20 },
                }}
              >
                Sales up 12% today 🚀
              </Typography>

              <Typography
                sx={{ 
                  fontSize: { xs: 12, sm: 13 }, 
                  color: "#8b88c4", 
                  lineHeight: 1.7 
                }}
              >
                Wednesday was peak performance at{" "}
                <Box
                  component="span"
                  sx={{ color: "#a599f9", fontWeight: 600 }}
                >
                  $5,000
                </Box>
                . Consider running a midweek campaign to capitalize on the
                trend.
              </Typography>
            </Box>

            <Box
              sx={{
                height: "1px",
                background: "rgba(124,106,247,0.15)",
                my: 2.5,
              }}
            />

            <Box sx={{ 
              display: "flex", 
              justifyContent: "space-between",
              gap: 1,
            }}>
              {[
                ["Peak", "Wed"],
                ["Avg", "$3.2k"],
                ["Δ", "+8%"],
              ].map(([label, val]) => (
                <Box key={label} sx={{ textAlign: "center", flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 9, sm: 10 },
                      color: "#4a4d6a",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      mb: 0.5,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{ 
                      fontSize: { xs: 12, sm: 13 }, 
                      fontWeight: 700, 
                      color: "#d0d2e8" 
                    }}
                  >
                    {val}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
