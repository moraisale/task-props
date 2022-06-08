import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { ICompany } from "../Products/Products";

interface ICompanyModal {
  isOpen: boolean;
  onClose: () => void;
  company: ICompany;
}

export const CompanyModal = (props: ICompanyModal) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { company } = props;

  return (
    <>
      <Button onClick={onOpen} mr={3}>
        {company.name}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="none" />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name: {company.name}</Text>
            <Text>Address: {company.address}</Text>
            <Text>Phone: {company.phone}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompanyModal;
