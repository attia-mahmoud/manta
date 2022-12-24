import {
  Paper,
  Title,
  createStyles,
  ThemeIcon,
  Text,
  Group,
} from "@mantine/core";
import { IconStar, IconAdjustments, IconPhoneCall } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBlock: theme.spacing.xl * 3,
    width: "90vw",
    maxWidth: "55rem",
    marginInline: "auto",
    backgroundColor: "#f0f9ff",
    // [theme.fn.smallerThan("md")]: {
    //   width: "90vw",
    // },
  },
  title: {
    fontFamily: "Verdana, sans-serif",
    textAlign: "center",
    fontSize: 28,
    color: theme.colors.gray[8],
    marginBottom: theme.spacing.xl * 2,
  },

  card: {
    width: "90%",
    maxWidth: "16rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "15rem",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
  },

  cardContainer: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const data = [
  {
    icon: <IconStar />,
    color: "pink",
    title: "Easy Interface",
    description: "Manta delivers blazing fast performace",
  },
  {
    icon: <IconAdjustments />,
    color: "blue",
    title: "Secured Transfers",
    description: "Have more control while being confident",
  },
  {
    icon: <IconPhoneCall />,
    color: "orange",
    title: "24/7 Support",
    description: "Available 7 days a week, 24 hours a day",
  },
];

const Product = () => {
  const { classes } = useStyles();

  const cards = data.map((card) => (
    <Paper key={card.title} className={classes.card} p="xl" radius="lg">
      <ThemeIcon radius="xl" size="xl" color={card.color} variant="light">
        {card.icon}
      </ThemeIcon>
      <Text className={classes.cardTitle}>{card.title}</Text>
      <Text>{card.description}</Text>
    </Paper>
  ));

  return (
    <Paper p="xl" className={classes.wrapper} radius="xl">
      <Title className={classes.title}>The Product we work with</Title>
      <Group position="center" className={classes.cardContainer} spacing="xl">
        {cards}
      </Group>
    </Paper>
  );
};

export { Product };
