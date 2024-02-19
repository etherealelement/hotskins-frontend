import { Button, Container, MantineProvider, createTheme, rem } from "@mantine/core";
import { FC } from "react";
import "@mantine/core/styles.css";
import { Logo } from "~/shared/ui";
import styles from "./Header.module.scss";
import { LogoText } from "~/shared/ui/LogoText";
export const Header: FC = (): JSX.Element => {
  const CONTAINER_SIZES: Record<string, string> = {
    md: rem(1600),
  };

  const theme = createTheme({
    components: {
      Container: Container.extend({
        vars: (_, { size, fluid }) => ({
          root: {
            "--container-size": fluid
              ? "100%"
              : size !== undefined && size in CONTAINER_SIZES
                ? CONTAINER_SIZES[size]
                : rem(size),
          },
        }),
      }),
    },
  });

  const routes: string[] = ["Помощь", "Контакты"];

  return (
    <MantineProvider theme={theme}>
      <header className={styles.header}>
        <Container size={"md"} {...CONTAINER_SIZES} pt={"16px"}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Logo></Logo>
              <span className={styles.logoText}>
                <LogoText></LogoText>
              </span>
            </div>
            <ul className={styles.menu}>
              {routes.map((item, id) => (
                <li key={id} className={styles.menuItem}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.divider}>
              <div className={styles.select}>

              </div>
              <Button variant="filled" color="rgb(244, 192, 56)" size="md" radius="xl"><a href="#" className={styles.buttonLink}>
                Войти
                </a></Button>
            </div>
          </div>
        </Container>
      </header>
    </MantineProvider>
  );
};
