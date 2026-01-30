"use client";

// styles
import { styles } from '../../styles/modal/createSubjectModal.styles';

// components
import { Flex, Fieldset, Stack, Field, Input, Textarea } from '@chakra-ui/react';
import { ModalContainer } from './ModalContainer';
import { CloseButton } from '../button/CloseButton';
import { Button } from '../button/Button';
import { X } from 'lucide-react';

// hooks
import { useCreateSubjectModal } from '@/src/hooks/createSubjectModal/useCreateSubjectModal';

type Props = {
  closeModal: () => void;
};

export function CreateSubjectModal({ closeModal }: Props) {
  // hook
  const createSubjectModalHook = useCreateSubjectModal();

  return <ModalContainer>
    <Fieldset.Root>

      {/* legenda e botao de fechar */}
      <Flex {...styles.legend.container}>
        <Fieldset.Legend {...styles.legend.fieldsetLegend}>Novo conteúdo</Fieldset.Legend>
        <CloseButton handleClose={closeModal}>
          <X />
        </CloseButton>
      </Flex>

      {/* fields */}
      <Stack {...styles.fieldsContainer}>

        {/* titulo */}
        <Field.Root invalid={createSubjectModalHook.title === ''}>
          <Field.Label {...styles.label}>Título</Field.Label>
          <Input {...styles.input} value={createSubjectModalHook.title} onChange={(e) => createSubjectModalHook.setTitle(e.target.value)} />
          <Field.ErrorText>Escreva um título</Field.ErrorText>
        </Field.Root>

        {/* conteudo */}
        <Field.Root {...styles.fieldRoot} invalid={createSubjectModalHook.content === ''}>
          <Field.Label {...styles.label}>Descrição</Field.Label>
          <Textarea {...styles.textarea} value={createSubjectModalHook.content} onChange={(e) => createSubjectModalHook.setContent(e.target.value)} />
          <Field.ErrorText>Escreva uma descrição</Field.ErrorText>
        </Field.Root>
      </Stack>

      {/* botão para enviar os dados para api */}
      <Button name="criar" handleClick={() => createSubjectModalHook.submitData(closeModal)} variant='base' />

    </Fieldset.Root>
  </ModalContainer>
}
