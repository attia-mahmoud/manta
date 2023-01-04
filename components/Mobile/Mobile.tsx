import {
  Paper,
  ThemeIcon,
  Title,
  Button,
  Text,
  createStyles,
} from "@mantine/core";
import Image from "next/image";
import { IconPhone } from "@tabler/icons";
import image from "../../public/mobile.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "#fef2f2",
    marginInline: "auto",
    marginBottom: theme.spacing.xl * 3,
    paddingInline: 32,
    paddingBlock: 48,
    width: "90vw",
    maxWidth: "55rem",
    [theme.fn.largerThan("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: 48,
    },
  },

  content: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "80%",
    margin: "0 auto",
    [theme.fn.largerThan("md")]: {
      maxWidth: "35ch",
    },
  },

  title: {
    fontSize: 28,
  },

  image: {
    flex: 1,
    height: "17rem",
    marginRight: "-10rem",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

const Mobile = () => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.wrapper} radius="xl">
      <div className={classes.content}>
        <ThemeIcon radius="xl" variant="outline" color="pink" size="xl">
          <IconPhone size={24} />
        </ThemeIcon>
        <Title className={classes.title}>Mobile App Interface</Title>
        <Text weight="500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima
          dignissimos labore cum pariatur voluptates.
        </Text>
        <Button color="dark" radius="lg" size="md">
          Know More
        </Button>
      </div>
      <Image src={image} className={classes.image} alt="pay" />
    </Paper>
  );
};

export { Mobile };
