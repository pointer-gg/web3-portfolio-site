import Link, { LinkProps } from "next/link";
import { Button, ButtonProps } from "@chakra-ui/react";

interface LinkButtonProps extends ButtonProps {
  href: LinkProps["href"];
  prefetch?: LinkProps["prefetch"];
  newTab?: boolean;
}

const LinkButton = ({
  href,
  children,
  prefetch = true,
  newTab = false,
  ...otherProps
}: LinkButtonProps) => {
  return (
    <Link href={href} passHref prefetch={prefetch}>
      <Button as="a" {...otherProps} target={newTab ? "_blank" : "_self"}>
        {children}
      </Button>
    </Link>
  );
};
export default LinkButton;
