import { FaCalendarAlt } from "react-icons/fa";
import { Box, Text, Spacer, Tag, Flex, Button, Icon } from "@chakra-ui/react"
import dayjs from "dayjs"
import "dayjs/locale/es"
import React from 'react'

export function LauchItem( launch ) {
    return (
        <Box bg="gray.100" p="4" m="4" borderRadius="40">
            <Box display="flex">
                <Text fontSize="2xl">
                    Mission <strong>launch.mission_name</strong>({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p="2" colorScheme={launch.launch_success ? "green" : "red"}>{launch.launch_success ? "Succes" : "Failure"}

                </Tag>
            </Box>
            <Flex align="center">
                <Icon as={FaCalendarAlt} color="gray.500" />
                <Text fontSize="sm" ml="2" color="gray.500">
                    {dayjs(launch.launch_date_local.split("T")[0])
                        .locale("es")
                        .format("D MMMM, YYYY")}
                </Text>
            </Flex>
            <Button mt="2" colorScheme="blue">More Details</Button>
        </Box>
    )
}
