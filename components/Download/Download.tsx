import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons";
import Image from "next/image";
import internet from "../../public/internet.svg";
import bg from "../../public/wavesFlipped.svg";
import { Footer } from "../Footer";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${bg.src})`,
    height: bg.height,
    marginTop: -theme.spacing.xl * 15,
    paddingTop: theme.spacing.xl * 32,
    [theme.fn.smallerThan("md")]: {
      marginTop: -theme.spacing.xl * 15,
      paddingTop: theme.spacing.xl * 23,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    paddingBlock: theme.spacing.xl,
    maxWidth: "100vw",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      gap: "3rem",
      alignItems: "center",
    },
  },

  content: {
    maxWidth: 480,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
      marginRight: 0,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 800,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 42,
      marginBottom: theme.spacing.xl,
    },
  },

  text: {
    color: theme.white,
    textDecoration: "underline",
    fontSize: 22,
    marginBottom: theme.spacing.lg,
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    height: "16rem",

    [theme.fn.smallerThan("md")]: {
      width: "20rem",
    },
  },
}));

function Download() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <Image src={internet} className={classes.image} alt="pay" />
        <div className={classes.content}>
          <Text className={classes.text}>Over 50,000 users</Text>
          <Title className={classes.title}>
            Download the Manta mobile app today
          </Title>

          <Group mt={50}>
            <Button
              radius="lg"
              size="md"
              color="dark"
              className={classes.control}
              leftIcon={<IconBrandApple />}
            >
              App Store
            </Button>
            <Button
              variant="default"
              radius="lg"
              size="md"
              className={classes.control}
              leftIcon={<IconBrandGooglePlay />}
            >
              Play Store
            </Button>
          </Group>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export { Download };
