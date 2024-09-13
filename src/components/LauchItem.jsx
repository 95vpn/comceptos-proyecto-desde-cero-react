import { FaCalendarAlt } from "react-icons/fa";
import { Box, Text, Spacer, Tag, Flex } from "@chakra-ui/react"

import React from 'react'

export function LauchItem( launch ) {
    return (
        <Box bg="gray.100" p="4" m="4" borderRadius="40">
            <Box display="flex">
                <Text fontSize="2xl">
                    Mission <strong>launch.mission_name</strong>({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p="4" colorScheme={launch.launch_success ? "green" : "red"}>{launch.launch_success ? "Succes" : "Failure"}

                </Tag>
            </Box>
            <Flex align="center">
                <FaCalendarAlt />
                <Text fontSize="sm" ml="2">
                    {launch.launch_date_local.split("T")[0]}
                </Text>
            </Flex>
        </Box>
    )
}
