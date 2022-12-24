import { Container, Group, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import Microsoft from "../../public/Microsoft.svg";
import Google from "../../public/Google.svg";
import Dropbox from "../../public/Dropbox.svg";
import Slack from "../../public/Slack.svg";
import Trello from "../../public/Trello.svg";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    [theme.fn.smallerThan("md")]: {
      gap: "2rem",
      marginTop: -theme.spacing.xl * 2,
    },
    alignItems: "center",
    marginTop: -theme.spacing.xl * 4,
  },

  image: {
    height: 90,
    // width: "auto",
    [theme.fn.smallerThan("md")]: {
      height: "auto",
      width: 150,
    },
  },

  list: {
    flexGrow: 1,
    [theme.fn.smallerThan("md")]: {
      flexWrap: "wrap",
      flexGrow: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  },

  title: {
    textAlign: "center",
  },
}));

const imageSet = [Microsoft, Google, Dropbox, Slack, Trello];

const Companies = () => {
  const { classes } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 768px)");
  return (
    <Container className={classes.wrapper}>
      <Text size="xl" className={classes.title}>
        Over{" "}
        <Text component="span" weight="700">
          32k+
        </Text>{" "}
        software businesses are growing with Manta
      </Text>
      <Group grow={largeScreen} spacing="xl" className={classes.list}>
        {imageSet.map((image) => (
          <Image
            src={image}
            alt="image"
            key={image.src}
            className={classes.image}
          />
        ))}
      </Group>
    </Container>
  );
};

export { Companies };
