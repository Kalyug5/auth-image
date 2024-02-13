import { Chip, Input,Navbar,NavbarBrand,NavbarContent,NavbarItem, } from "@nextui-org/react";
import Link from "next/link";

import HeaderAuth from "./header-auth";

export default function Header(){
    return(
        <Navbar className="mb-6 shadow bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-sm">
            <NavbarBrand className="text-lg text-blue-500 font-semibold">
                Assignment
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem >
                    <Chip size="md" color="warning" variant="bordered">Blinkit Authorization</Chip>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end">
                <HeaderAuth/>
            </NavbarContent>
        </Navbar>
    )
}