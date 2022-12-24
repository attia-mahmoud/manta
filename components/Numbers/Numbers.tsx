import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  SimpleGrid,
  Box,
} from "@mantine/core";
import Image from "next/image";
import { IconCheck } from "@tabler/icons";
import image from "../../public/devices.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    // backgroundImage: `url(${bg.src})`,
    // height: bg.height,
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
    height: "22rem",

    [theme.fn.smallerThan("md")]: {
      width: "20rem",
    },
  },

  underline: {
    position: "relative",
    textDecoration: "underline",
    color: theme.colors.red[4],
  },

  cardNumber: {
    fontSize: 36,
    fontWeight: 700,
  },
}));

const data = [
  {
    number: "50.4k",
    title: "Downloads",
  },
  {
    number: "20k",
    title: "Active Users",
  },
  {
    number: "300+",
    title: "Using Group",
  },
  {
    number: "10k+",
    title: "Subscribers",
  },
];

function Numbers() {
  const { classes } = useStyles();

  const numbers = data.map((el) => (
    <Box key={el.title}>
      <Text className={classes.cardNumber}>{el.number}</Text>
      <Text>{el.title}</Text>
    </Box>
  ));
  return (
    <div>
      <Container className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Okay, let&apos;s see{" "}
              <span className={classes.underline}>Manta in numbers</span>
            </Title>
            <Text mt="md" size="lg" weight="700" w="35ch">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur.
            </Text>

            <SimpleGrid cols={2} spacing={0} verticalSpacing="xl" my="xl">
              {numbers}
            </SimpleGrid>
          </div>
          <Image src={image} className={classes.image} alt="image" />
        </div>
      </Container>
    </div>
  );
}

export { Numbers };
