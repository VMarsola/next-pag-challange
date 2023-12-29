import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  UnorderedList,
  Input,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from "@chakra-ui/react";

import styles from "../charge.module.css";

const ChargesPresentation = ({
  setSearchName,
  searchName,
  handler,
  hasCharges,
  data,
}) => {
  const { chargeList, loading, error } = data;

  if (error) return <p>Erro</p>;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Charges</Heading>
      </CardHeader>
      <CardBody>
        <div className={styles.row}>
          <Input
            mb={4}
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
            value={searchName}
            placeholder="Buscar"
          />
          <Button
            onClick={() => handler(searchName)}
            type="button"
            ml={4}
            isDisabled={loading}
          >
            Filtrar
          </Button>
        </div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <UnorderedList mt={4} mr={4}>
            {hasCharges ? (
              chargeList.map((e) => (
                <ListItem key={e.debitCode}>{e.name}</ListItem>
              ))
            ) : (
              <p>Resultado não encontrado</p>
            )}
          </UnorderedList>
        )}
      </CardBody>
    </Card>
  );
};

ChargesPresentation.propTypes = {
  setSearchName: PropTypes.func,
  searchName: PropTypes.string,
  handler: PropTypes.func,
  hasCharges: PropTypes.bool,
  data: PropTypes.object,
};

export default ChargesPresentation;
