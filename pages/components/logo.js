import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    light-height: 20px;
    padding: 10px;
`

const Logo = () => {
    const nervousDogSpinning = `/images/nervous-dog-spinning.gif`

    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <Image src={nervousDogSpinning} width={30} height={30} alt="logo" />
                    <Text color={useColorModeValue('gray.800', 'wgiteAlpha.900')} fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={1}>
                        Tharathon Doies
                    </Text>
                </LogoBox>
            </a>
        </Link >
    )
}

export default Logo