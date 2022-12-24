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
import pay from "../../public/pay.svg";
import bg from "../../public/waves1.svg";
import { Navigation } from "../Header";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${bg.src})`,
    height: bg.height,
    marginBottom: theme.spacing.xl * 2,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: theme.spacing.xl * 5,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    [theme.fn.largerThan("md")]: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      width: "60vw",
    },
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      gap: "3rem",
      alignItems: "center",
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("sm")]: {
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
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 42,
      marginBottom: theme.spacing.xl,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    height: "25rem",

    [theme.fn.smallerThan("md")]: {
      width: "20rem",
    },
  },

  underline: {
    position: "relative",
    textDecoration: "underline",
    color: theme.colors.blue[8],
  },
}));

function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Navigation />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Improve the way <br />
              <Text component="span" className={classes.underline}>
                you charge
              </Text>
              , <br />
              with one click
            </Title>
            <Text mt="md" size="lg" weight="700" w="35ch">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, soluta.
            </Text>

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
          <Image src={pay} className={classes.image} alt="pay" />
        </div>
      </Container>
    </div>
  );
}

export { Hero };
