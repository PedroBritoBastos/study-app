'use client'

import { Flex, Text, Grid, Card } from "@chakra-ui/react";

export default function CalendarPage() {
  return (
    <Flex
      flex="1"
      p={8}
      bg="#c4bff1"
      minH="100vh"
      flexDirection="column"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.800"
        mb={6}
      >
        Calendário
      </Text>

      {/* Grid do calendário */}
      <Grid
        flex={1}
        templateColumns="repeat(8, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={4}
      >
        {/* Dias do mês */}
        <Card.Root><Card.Body><Text>1</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>2</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>3</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>4</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>5</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>6</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>7</Text></Card.Body></Card.Root>

        <Card.Root><Card.Body><Text>8</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>9</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>10</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>11</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>12</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>13</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>14</Text></Card.Body></Card.Root>

        <Card.Root><Card.Body><Text>15</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>16</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>17</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>18</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>19</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>20</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>21</Text></Card.Body></Card.Root>

        <Card.Root><Card.Body><Text>22</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>23</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>24</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>25</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>26</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>27</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>28</Text></Card.Body></Card.Root>

        <Card.Root><Card.Body><Text>29</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>30</Text></Card.Body></Card.Root>
        <Card.Root><Card.Body><Text>31</Text></Card.Body></Card.Root>
      </Grid>
    </Flex>
  );
}
