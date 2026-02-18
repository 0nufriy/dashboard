import { Box, SxProps, Theme } from "@mui/material";
import { SummaryCard } from "@/components/SummaryCard";
import { KPICard } from "@/components/KPICard";

export interface CardData {
  label: string;
  value: string;
  trend?: string;
  up?: boolean;
  sub?: string;
}

interface CardsListProps {
  cards: CardData[];
  variant?: "summary" | "kpi";
  wrapperSx?: SxProps<Theme>;
}

export const CardsList = ({
  cards,
  variant = "summary",
  wrapperSx = {},
}: CardsListProps) => (
  <Box sx={{ 
    display: "flex", 
    gap: { xs: 1.5, sm: 2, md: 2.5 }, 
    flexWrap: "wrap", 
    ...wrapperSx 
  }}>
    {cards.map((card) =>
      variant === "kpi" ? (
        <KPICard
          key={card.label}
          label={card.label}
          value={card.value}
          trend={card.trend}
          up={card.up}
        />
      ) : (
        <SummaryCard
          key={card.label}
          label={card.label}
          value={card.value}
          sub={card.sub}
          trend={card.trend}
          up={card.up}
        />
      )
    )}
  </Box>
);
