import React from "react";
import {AppLogo} from "../Logo";
import {Container, Flex} from "../../layout/layout.styles";
import {MenuToggle} from "./MenuToggle";

export const Navigation = () => {
    return (
        <Container>
            <Flex horizontal="space-between">
                <AppLogo />
                <MenuToggle />
            </Flex>

        </Container>
    )
}
