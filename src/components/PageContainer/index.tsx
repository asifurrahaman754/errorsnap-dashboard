import { Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps extends ContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
  ...rest
}: PageContainerProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }} {...rest}>
      {children}
    </Container>
  );
}
