import {
  Alert,
  Button,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { isEmpty } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import {
  useCreateContactMutation,
  useCreateContragentMutation,
  useCreateProviderMutation,
} from 'src/schemas/generated';

interface FormProps {
  name: string;
  location: string;
  inn: string;
  category: string;
}

export const CreateContragentsModal: React.FC = () => {
  const { control, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      location: '',
      inn: '',
      name: '',
      category: '',
    },
  });

  const [createEntity, { data, loading, error }] = useCreateContragentMutation({
    fetchPolicy: 'no-cache',
  });
  const [createContact, {error: ContactError}] = useCreateContactMutation({
    fetchPolicy: 'no-cache',
  });

  const handleFormSubmit = (form: FormProps) => {
    createContact({ variables: { data: form } }).then((data) =>
      createEntity({
        variables: { data: { contact: data.data?.createContact?.data?.id } },
      })
    );
  };

  return (
    <Grid
    width={'100%'}
    minWidth={'25vmax'}
      container
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      p={2}
    >
      <Grid item>
        <Typography variant="h5">Добавление контрагента</Typography>
      </Grid>

      {(!isEmpty(error) || !isEmpty(ContactError)) && !loading && (
        <Stack mt={2} sx={{ width: '100%' }}>
          <Alert severity="error">
            Проверьте правильность указанных данных
          </Alert>
        </Stack>
      )}
      {isEmpty(error) && !loading && data && (
        <Stack mt={2} sx={{ width: '100%' }}>
          <Alert severity="success">Контрагент успешно создан</Alert>
        </Stack>
      )}

      <Controller
        name={'name'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Имя"
            helperText="Введите имя продукта"
          ></TextField>
        )}
      />
      <Controller
        name={'location'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Адрес"
            helperText="Введите адрес"
          ></TextField>
        )}
      />
      <Controller
        name={'inn'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="ИНН"
            helperText="Введите инн"
          ></TextField>
        )}
      />
      <Controller
        name={'category'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Категория"
            helperText="Введите категорию"
          ></TextField>
        )}
      />

      {loading && (
        <LinearProgress
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        />
      )}

      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit(handleFormSubmit)}
      >
        Создать
      </Button>
    </Grid>
  );
};
